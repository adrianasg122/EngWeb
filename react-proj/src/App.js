import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        i:0
    }
  }

   openTab(evt, aux) {
    var i, x, tablinks
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
    }
    document.getElementById(aux).style.display = "block";
    evt.currentTarget.className += " w3-red ";
  }

  increment() {
    this.setState({
      i: this.state.i+1
    })
  }

  clear() {
    this.setState({
      i: 0
    })
  }

  render() {
    const v1={
      width:"130px",
    }; 
    const v2={
      display:'none',
    }; 
    const v3={
      'margin-left': '130px',
      'margin-top': '-75px', 
    }; 
    return (
      
      <div className="App">  
        <div class="w3-container w3-center  w3-padding-16">
          <button class="w3-button w3-black" onClick={()=>this.increment()}>push me</button> 
            <div class="counter">{this.state.i} </div>
        </div>
        <div class="w3-container w3-center  w3-padding-16">
          <button class="w3-button w3-black" onClick={()=>this.clear()}>clear</button>  
        </div>
        <div class="w3-container w3-center  w3-padding-16">
          <Link to="/Teste"><button>Outside</button></Link>
        </div>
      </div>
    );
  }
}


export default App;
