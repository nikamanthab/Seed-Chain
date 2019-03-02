import lib from './userweb3';
import web3 from './web3';


async function init(){
    var address=await web3.eth.getAccounts();


    return lib.init(address[0]);
}

export default init;
