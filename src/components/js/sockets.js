import io from 'socket.io-client';

import  inputlib from './socketinput.js'

const socket=io('http://locahost:3400');

socket.on('codescan',function(data){
    inputlib(data);
})