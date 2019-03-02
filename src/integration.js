import Web3 from './web3';

let addressuser = '0xF5bFa1c07df5FbFd09da9C046F5206EBd32e926D';
let abiuser = [{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "owners",
    "outputs": [{
        "name": "name",
        "type": "string"
    }, {
        "name": "is_manufacturer",
        "type": "bool"
    }, {
        "name": "ph_no",
        "type": "uint256"
    }, {
        "name": "mail",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getowns",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_name",
        "type": "string"
    }, {
        "name": "_man",
        "type": "bool"
    }, {
        "name": "_pno",
        "type": "uint256"
    }, {
        "name": "_mail",
        "type": "string"
    }],
    "name": "createUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "verify",
    "outputs": [],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "checkman",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "createasset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "ownership",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "getdetails",
    "outputs": [{
        "name": "",
        "type": "string"
    }, {
        "name": "",
        "type": "bool"
    }, {
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "rec",
        "type": "address"
    }, {
        "name": "_padd",
        "type": "address"
    }],
    "name": "transact",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];


let abiitem = [{
    "constant": false,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "track",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "getState",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_id",
        "type": "address"
    }],
    "name": "checkDiscard",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "assetarray",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_id",
        "type": "address"
    }],
    "name": "checkownership",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_ispacket",
        "type": "bool"
    }, {
        "name": "isfinal",
        "type": "bool"
    }, {
        "name": "_name",
        "type": "string"
    }, {
        "name": "_weight",
        "type": "uint32"
    }, {
        "name": "_date",
        "type": "uint32"
    }, {
        "name": "_expd",
        "type": "uint32"
    }],
    "name": "createAsset",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "curaddress",
        "type": "address"
    }, {
        "name": "paradd",
        "type": "address"
    }],
    "name": "assign_parid",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "i",
        "type": "address"
    }],
    "name": "verify",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "itemCount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_newid",
        "type": "address"
    }, {
        "name": "_id",
        "type": "address"
    }],
    "name": "statepush",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "assetlist",
    "outputs": [{
        "name": "name",
        "type": "string"
    }, {
        "name": "weight",
        "type": "uint32"
    }, {
        "name": "date",
        "type": "uint32"
    }, {
        "name": "expd",
        "type": "uint32"
    }, {
        "name": "parid",
        "type": "address"
    }, {
        "name": "dis",
        "type": "bool"
    }, {
        "name": "ispacket",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_id",
        "type": "address"
    }],
    "name": "discard",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "receiver",
        "type": "address"
    }, {
        "name": "id",
        "type": "address"
    }],
    "name": "transact",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}]

let addressitem = '0x7A1B9Fa58b3815b72f6e5210CEC35DB2126b4A38';
var user = new Web3.eth.Contract(abiuser, addressuser);
var item = new Web3.eth.Contract(abiitem, addressitem);



var publicApi = {
    user,
    item
}
export default publicApi;