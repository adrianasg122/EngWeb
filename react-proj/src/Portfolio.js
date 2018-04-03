import React, { Component } from 'react';
import styles from './w3.css';
import { Link } from 'react-router-dom';



class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    return (
      <div className="Portfolio">  
     
     <div class="w3-bar">
      <div class="w3-bar w3-light-blue w3-card w3-left-align">
          <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
          <Link to="/App" class="w3-bar-item w3-button w3-padding-large w3-white">Home</Link>
          <Link to="/Perfil" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">O meu perfil</Link>
          <Link to="/Portfolio" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Portfólio</Link>
          <Link to="/Historico" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Histórico</Link>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Abrir contrato</a>
    </div>
    </div>



    <div class="w3-container w3-center  w3-padding-16">
      <p>   PORTFOLIO {this.props.i} </p>
        <Link to="/App"><button>Back</button></Link>
      </div>




      </div>
    );
  }
}


export default Portfolio;
