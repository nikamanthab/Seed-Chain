import React, { Component } from 'react';
import web3init from './../web3init';
import InventryCard from './inventrycard';

class Inventry extends Component {
 
    // componentDidMount = () =>{
    //     web3init().then((d)=>{
    //         if(d.account==0){}
    //     })
    // }

    state={
        n:[]
    }
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
        }).then((data)=>{
            console.log("hmmm",Array.isArray(data));
            console.log(data);
            this.setState({n:data});
        }).catch(err=>{console.log(err)});
    }
    
  render() {
      let names = this.state.n;
    //   console.log("arrrr",arr)
      console.log(names["0"],names.length)
      return(
          <div>
              <h1>Inventry</h1>
              <div>
              {
                  names.map((val,i)=>{
                      return(
                          <div>
                          <InventryCard  x={names[i][0]} weight={names[i][1]} mfd={names[i][2]} exp={names[i][3]} type={names[i][4]}/>
                            </div>
                       )
                  })
              }
            </div>
          </div>
      )
   
  }
}

export default Inventry;
