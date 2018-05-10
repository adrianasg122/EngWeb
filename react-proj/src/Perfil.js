import React, { Component } from 'react';

class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    document.getElementById("perfilNavBar").className = document.getElementById("perfilNavBar").className.concat(" w3-white");
    console.log(this.props);
    return (
      <div className="Perfil">
        <h1 className="titulo">O Meu Perfil</h1>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1  ">
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Primeiro Nome:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                Manuel
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Ultimo Nome:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                Pereira
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Username:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                manuel123
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Email:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                manuel123@mail.com
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Telemóvel:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                +351 909 090 901
                </div>
            </div>
            <div className="perfil row ">
              <div className="col-sm-6 col-md-8 w3-padding-32">
                <b>Carregar a conta: </b>
                <i className="paypal fa fa-paypal w3-button w3-hover-white"></i>
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2 w3-margin-top">
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Saldo:</b>
              </div>
              <div className="col-sm-6 col-md-4">
                1000€
                </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Total Investido:</b>
              </div>
              <div className="col-sm-6 col-md-4">
                2000€
                </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Total de Ganho/Perda:</b>
              </div>
              <div className="col-sm-6 col-md-4">
                +134.5€
                </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Equitity:</b>
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

