import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    document.getElementById("perfilNavBar").className="w3-white w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white";
    return (
      <div className="Perfil">
        <div className="row">
          <div className="col-sm-6">
            <h1>O Meu Perfil</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5 offset-md-1">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                Primeiro Nome:
                </div>
              <div className="col-sm-6 col-md-6">
                Manuel
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                Ultimo Nome:
                </div>
              <div className="col-sm-6 col-md-6">
                Pereira
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                Username:
                </div>
              <div className="col-sm-6 col-md-6">
                manuel123
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                Email:
                </div>
              <div className="col-sm-6 col-md-6">
                manuel123@mail.com
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                Telemóvel:
                </div>
              <div className="col-sm-6 col-md-6">
                +351 909 090 901
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 offset-md-1 w3-border w3-margin-top">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                Saldo:
                </div>
              <div className="col-sm-6 col-md-4">
                1000€
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-8">
                Total Investido:
                </div>
              <div className="col-sm-6 col-md-4">
                2000€
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-8">
                Total de Ganho/Perda:
                </div>
              <div className="col-sm-6 col-md-4">
                +134.5€
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-8">
                Equitity:
                </div>
              <div className="col-sm-6 col-md-4">
                3134.5€
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Perfil;

