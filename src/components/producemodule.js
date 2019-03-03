import React, { Component }  from 'react';
import web3init from './../web3init';

class Producemodule extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:"",
            weight:"",
            quantity:0,
            manufacturing:new Date(),
            expiry:new Date()
        }
    }     



    handleNameOnChange = (event)=>{
        this.setState({name:event.target.value})
    }

    handleWeightOnChange = (event)=>{
        this.setState({weight:event.target.value})
    }

    handleQuantityOnChange =(event)=>{
        this.setState({quantity:event.target.value})
    }

    handleManOnChange =(event)=>{
        this.setState({manufacturing:event.target.value})
    }

    handleExpiryOnChange =(event)=>{
        this.setState({expiry:event.target.value})
    }
    // handleOtpOnChange = (event) =>{
    //     this.setState({otp:event.target.value})
    // }

    //http request to post otp....
    httppost=(data)=>{
        const invocation = new XMLHttpRequest();
        const url = 'http://172.16.0.111:3400/dozip';
        if(invocation)
        
            {
                console.log("Hello");

            invocation.open('POST', url, true);

            invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
            invocation.setRequestHeader('Access-Control-Allow-Origin', 'http://172.16.0.111:3400');
            invocation.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            invocation.onreadystatechange = function() {
                      if (this.readyState === 4 && this.status === 200) {
                        // document.getElementById("demo").innerHTML = this.responseText;
                        console.log(this.responseText);
                      };
            }
            invocation.send(data);
        }
        else{console.log("hmmmmmmmm")}
    }

    handleJoinClick = ()=>{
        console.log(this.state.name);
        console.log(this.state.weight);
        console.log(this.state.quantity);
        console.log(this.state.manufacturing);
        console.log(this.state.expiry);

        var len = this.state.quantity;
        var gen=async ()=>{
            var api= await web3init();
            console.log(api);
            var arr=[];var address;
            
            for(let i=0;i<len;i++){
                console.log(true,this.state.name,this.state.weight,+new Date(this.state.manufacturing+""),+new Date(this.state.expiry+""));
             address=await api.produceItem(true,this.state.name,this.state.weight,+new Date(this.state.manufacturing+""),+new Date(this.state.expiry+""));
               arr.push(address);
            }
            console.log(arr);
/////////////////////
            this.httppost(JSON.stringify({arr,account:api.account}));

            return arr;
        }
        gen().then(d=>console.log).catch(err=>console.err);

        //web3 create user function call............
        // web3.eth.getAccounts().then((d)=>{
        //     lib.init(d[0]).signUp(this.state.username, this.state.access==="manufactorer", this.state.phoneno, this.state.email)
        //     .then(c=>console.log).catch(err=>{console.log(err)});
        // });


        // navigate(`/userpage/${this.state.email}/${this.state.username}`)
    }

    // handleInputClick1 = () =>{
    //     this.setState({access:"manufactorer"})
    // }

    // handleInputClick2 = () =>{
    //     this.setState({access:"seller"})
    // }

    render() {
        return (
        <div >
            <div className="producemodule">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="wrap boldfont padd text-center white"> <i className="fas fa-seedling"></i> Seed <i id="rotate" className="fas fa-link"></i>
                        Chain</h3>
                    </div>
                </div>
                <form  className="productform container" name="productform">

                    <h2 className="boldfont" align="center">Produce items in Blockchain</h2>

                    <ul className="noBullet">
                    <div className="row ">
                    <div className="col-sm-6 ">
                        <li>
                            <label htmlFor="name"></label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="name" onChange={this.handleNameOnChange} required/>
                        </li>
                    </div>
                    <div className="col-sm-6">
                        <li>
                            <label htmlFor="weight"></label>
                            <input type="text" className="form-control" id="weight" name="weight" placeholder="Weighteight" onChange={this.handleWeightOnChange} required/>
                        </li>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-sm-6 ">
                        <li>
                            <br/>
                            <label className="smallfont" htmlFor="manufacturing">Manufactored date:</label>
                            <input type="date" className="form-control" id="manufacturing" name="manufacturing" placeholder="manufacturing" onChange={this.handleManOnChange} required/>
                        </li>
                    </div>
                    <div className="col-sm-6">
                        <li>
                            <br/>
                            <label className="smallfont" htmlFor="expiry">Expiry date:</label>
                            <input type="date" className="form-control" id="expiry" name="expiry" placeholder="expiry" onChange={this.handleExpiryOnChange} required/>
                        </li>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <li >
                            <label htmlFor="quantity"></label>
                            <input type="text" className="form-control" id="quantity"  name="quantity" placeholder="quantity" onChange={this.handleQuantityOnChange} required/>
                        </li>
                        <br/>
                        <li id="center-btn" align="center">
                            <input  className="btn wrap primaryfont extend white" value="Join" onClick={this.handleJoinClick} />
                        </li>
                    </div>
        
                    </div>
                    </ul>
                </form>            
            </div>
                
        </div>
        );
    }
}

export default Producemodule;





