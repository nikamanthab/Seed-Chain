import React, {Component} from 'react';

class  Usercard extends Component {

    state={
        username:"Riya Raju",
        useraddress:"SSN",
        date: new Date()
    }

    render(){
        return(
           <div className="container marginrem">
            <div className="card border-secondary  shadow-sm bold medfont" align="center">
                    <div className="row">
                        <div className="col-sm-6">{this.props.name}</div>
                        {/* <div className="col-sm-4"></div> */}
                        <div className="col-sm-6" >{this.state.useraddress}</div>
                 </div>
                 <div>{+this.state.date}</div>
            </div>
            <div align="center">
                <i class="fas fa-link"></i>  
            </div> 
            {/* <br/> */}
           </div> 
        );
    }
}

export default Usercard ;