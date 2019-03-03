import React, { Component } from 'react';
import web3init from './../web3init';
import InventryCard from './inventrycard';

class Inventry extends Component {
 
    // componentDidMount = () =>{
    //     web3init().then((d)=>{
    //         if(d.account==0){}
    //     })
    // }

    componentDidMount(){
        // web3init().then((api)=>{
        //     console.log(api.account);
        //     return  api.getUserInfo(api.account);
        // }).then((d)=>{
        //     if(!(d[1])){
        //         alert("User not registered Please signup first !!");
        //         return ;
        //     }
        //     this.handleLoginRouteChange(d[3],d[0]);
        // }).catch((e)=>{
        //     console.log(e);
        //     alert("User not registered Please signup first !!");
        // })
        
        web3init().then((api)=>{
            
            console.log(api.account);
            return api.listInventory();
        }).then((data)=>{console.log(data)}).catch(err=>{console.log(err)});
    }
    handleTrackButton = () =>{

    }
  render() {
      let n=["watermelon","onion seed","garlic peals"];
      return(
          <div>
              <h1>Inventry</h1>
              <div>
              {
                  n.map((val)=>{
                      return(
                          <InventryCard handleTrackButton={this.handleTrackButton} name={val}/>
                      )
                  })
              }
            </div>
          </div>
      )
   
  }
}

export default Inventry;
