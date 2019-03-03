import contracts from './integration.js';
console.log(contracts);
let user = contracts.user;
let item = contracts.item;
let err = {
    err: '',
    failure: false
}
console.log(user.methods);

let account;

function fillErr(error) {
    err.err = error;
    err.failure = true;
    return err;
}

function signUp(name, isMan, phno, mail) {

    return new Promise(function (res, rej) {
        user.methods.createUser(name, isMan, phno, mail).send({
            from: account
        }).then((dt) => res(true)).catch((err) => rej(fillErr(err)));
    });
}


function verify(account) {
    return new Promise((res, rej) => {
        console.log("hello");
        user.methods.verify(account).call().then((d) => {
            if(d){
                res(true);
            }else{
                rej("User not already registered");
            }            
        }).catch((err) => {
            console.log("error occured");
            rej(fillErr(err));
    });

})
}

// function directverify() {
//     return new Promise((res, rej) => {
//         user.methods.verify(account).then(() => res(true)).catch((err) => rej(fillErr(err)));
//     });

// }


function checkManufacturer() {
    return new Promise((res, rej) => {
        user.methods.checkMan().call().then(() => res(true)).catch((err) => rej(fillErr(err)));
    })
}

function transact(address, product, date) {
    return new Promise((res, rej) => {
        user.methods.transact(address, product).send({
            from: account
        }).then(() => {
            item.methods.transact(address, product, date).send({
                from: account
            }).then((d) => {
                item.methods.message().call().then((msg) => res(msg)).catch((err) => rej(""));
            }).catch((err) => rej(fillErr(err)));
        })
    });
}


function produceItem(isPacket, isFinal, name, weight, date, exp) {
    var potentialresult;
    return new Promise((res, rej) => {
console.log(account,...arguments);
        item.methods.createAsset(...arguments).send({
            from: account
        }).then(() => {
            return item.methods.addr().call()
        }).then((data)=>{
                potentialresult=data;
            return user.methods.createAsset(data,account).send({
                from: account
            })
        }).then(()=>{
            res(potentialresult);
        }).catch((err)=>rej(fillErr(err)));
    
    });
}


function listInventory() {
    console.log("---------entered");
    return new Promise((res, rej) => {
        var result = [];
        user.methods.getOwns(account).call().then((d) => {
          
            var rest=async function(){
             for(let data of d){
                 let dos=await item.methods.getdetails(data).call();
                 result.push(dos);
                 if(result.length==d.length){
                     result.push(d);
                     return result;
                 }
             }
            }
            rest().then((data)=>res(data));
            // d.forEach(async (data) => {
            //     try {
            //         console.log(data);
            //         result.push(await item.methods.getdetails(data).call());
            //     } catch (err) {
            //         rej(fillErr(err));
            //     }
            // });
            // res(result);
        }).catch(err => rej(fillErr(err)));
    })
};


function getUserInfo() {
    return new Promise((res, rej) => {
        console.log("--------------");
        console.log(user.methods);
        user.methods.getdetails(account).call().then((d) => res(d)).catch((err) => rej(fillErr(err)));
    })
}

function searchProduct(prod) {
    return new Promise((res, rej) => {
        item.methods.getdetails(prod).call().then((d) => res(d)).catch(err => rej(fillErr(err)));
    })
}

function createBatch(arr, isFinal, name, weight, date, exp) {
    return new Promise((res, rej) => {
        produceItem(false, name, weight, date, exp).then((d) => {
         item.methods.createBatch(arr,d).send({from:account}).then(()=>res(true)).catch("");
        }).catch(err => rej(fillErr(err)));
    });
}


function finalize(arr) {
    return new Promise((res, rej) => {
        arr.forEach(async (data) => {
            try {
                await item.methods.finalize(data).send({
                    from: account
                });
            } catch (err) {
                rej(fillErr(err));
            }
        });
        res(true);
    })
};

function track(address) {
    return new Promise((res, rej) => {
        var result = [];
        item.methods.track(address).call().then((data) => {
            item.methods.trackChain().call().then((data) => {
                data.forEach(async (d) => {
                    result.push(await getUserInfo(d));
                })
                res(result);
            }).catch("");
        }).catch(err => rej(fillErr(err)));

    });
}

var publicApi = {
    signUp,
    verify,
    listInventory,
    getUserInfo,
    checkManufacturer,
    transact,
    track,
    finalize,
    createBatch,
    searchProduct,
    produceItem,
    account
}


function init(_account) {
    account = _account;
    publicApi.account = account;
    return publicApi;
}


export default {
    init
};