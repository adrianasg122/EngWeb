import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AbrirContrato extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    document.getElementById("abrirContratoNavBar").className="w3-white w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white";
    return (
      <div className="AbrirContrato">
      </div>x
    );
  }
}


export default AbrirContrato;

