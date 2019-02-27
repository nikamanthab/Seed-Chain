import React, { Component } from 'react';
// import './css/home.css';
// import './../slideout-master/dist/slideout';
import Slideout from 'slideout';
import './css/home.css'

console.log(Slideout);
class Home extends Component {
  button={
    width:"100%"
  }

  menumystyle={
    background:"yellow"
  }
  style={
    transform: "translateX(256px)"
  }
  display={
    display:"block",
    overflow:"hidden"
  }
  componentDidMount() {
    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });
  
    if(window.innerWidth>768)
    {
      document.querySelector(".toggle-button").style.display="none";
      this.slideout.open();
    }
 
  }

  handleham=()=>{
    this.slideout.toggle();
  }

  render() {
    return (
      <div>
        {/* style={this.display} */}
        {/* style={{overflow:"hidden"}} */}
        <nav id="menu"  style={this.menumystyle}>
          <header>
            <h2>Menu</h2>
          </header>
          <button style={this.button}>Link1</button>
        </nav>
        {/* style={this.style} */}
        <main id="panel" >
        <header>
        <button className="toggle-button" onClick={this.handleham}>☰</button>
        <h2>Panel</h2>
      </header>
        </main>
      </div>
    );
  }
}

export default Home;
