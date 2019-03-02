import contracts from './integration.js';

let user = contracts.user;
let item = contracts.item;
let err = {
    err: '',
    failure: false
}

let account;

function fillErr(error) {
    err.err = error;
    err.failure = true;
    return err;
}

function signUp(name, isMan, phno, mail) {

    return new Promise(function (res, rej) {
        console.log("-----------------------------");
        console.log(name,isMan,phno,mail,account);
        user.methods.createUser(name, isMan, phno, mail).send({
            from: account
        }).then((dt) => res(true)).catch((err) => rej(fillErr(err)));
    });
}


function verify() {
    return new Promise((res, rej) => {
        user.methods.verify().call().then(() => res(true)).catch((err) => rej(fillErr(err)));
    });

}


function checkManufacturer() {
    return new Promise((res, rej) => {
        user.methods.checkMan().call().then(() => res(true)).catch((err) => rej(fillErr(err)));
    })
}

function transact( address, product,date) {
    return new Promise((res, rej) => {
        user.methods.transact(address, product).send({
            from: account
        }).then(() => {
            item.methods.transact(address, product,date).send({
                from: account
            }).then((d) => {
                    res(true);
            }).catch((err) => rej(fillErr(err)));
        })
    });
}


function produceItem(isPacket, isFinal, name, weight, date, exp) {
    return new Promise((res, rej) => {

        item.methods.createAsset(...arguments).send({from:account}).then((d) => {
            return user.methods.createAsset(d).send({from:account})
        }).then((d) => res(true)).catch((err) => rej(fillErr(err)));
    });
}


function listInventory(){
    return new Promise((res,rej)=>{
        var result=[];
        user.methods.getOwns().send({from:account}).then((d)=>{
          d.forEach(async (data)=>{
              try{
              result.push(await item.methods.getDetails(data).call());
              }catch(err){
                  rej(fillErr(err));
              }
          });
          res(result);
        }).catch(err=> rej(fillErr(err)));
    })
};


function getUserInfo(address){
    return new Promise((res,rej)=>{
        user.methods.getDetails(address).call().then((d)=>res(d)).catch((err) => rej(fillErr(err)));
    })
}

function searchProduct(prod){
    return new Promise((res,rej)=>{
        item.methods.getDetails(prod).call().then((d)=>res(d)).catch(err=> rej(fillErr(err)));
    })
}

function createBatch(arr,isFinal,name,weight,date,exp){
    return new Promise((res,rej)=>{
        produceItem(false,true, name, weight, date, exp).then((d)=>{
            arr.forEach(async (data)=>{
                try{
               await item.methods.assign_parid(data,d).send({from:account});
                }catch(err){
                    rej(fillErr(err));
                }
            });
            res(true);
        }).catch(err=> rej(fillErr(err)));
    });
}


function finalize(arr){
    return new Promise((res,rej)=>{
        arr.forEach(async (data)=>{
            try{
           await item.methods.finalize(data).send({from:account});
            }catch(err){
                rej(fillErr(err));
            }
        });
        res(true);
    })
};

function track(address){
    return new Promise((res,rej)=>{
        var result=[];
    item.methods.track(address).call().then((data)=>{
        data.forEach(async (d)=>{
           result.push(await getUserInfo(d));
        });
        res(result);
    }).catch(err=> rej(fillErr(err)));

    });
}

var publicApi={
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
produceItem
}


function init(_account){
account=_account;
return publicApi;
}


export default {
    init
};