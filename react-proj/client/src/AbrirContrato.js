import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AbrirContrato extends Component {

  render() {
    return (
      <div className="AbrirContrato">
        <h1>Facebook, Inc.</h1>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1 ">
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Sigla:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                FB
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Abertura:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                166.13
                </div>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Compra:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                164.75
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Venda:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                164.88
                </div>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Valor Mercado:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                479.005B
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Volume:</b>
              </div>
              <div className="col-xs-6 col-md-6">
                73,570,230
              </div>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Volume Médio:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                21,993,430
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Ultimo Fecho:</b>
                </div>
              <div className="col-xs-6 col-md-6">
                169.39
                </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2 w3-margin-top">
            <div className="row w3-padding-64">
              <div className="col-xs-6">
              <b>Saldo:</b>
              </div>
              <div className="col-xs-6">
                1000€
              </div>
            </div>
            <div className="row w3-padding-16">
              <input className="col-xs-6 col-xs-offset-1" />
            </div>
            <div className="row">
              <form action="">
                <div className="col-xs-6">
                  <input type="radio" name="comprarVender" value="comprar"/> Comprar
              </div>
                <div className="col-xs-6">
                  <input type="radio" name="comprarVender" value="vender"/> Vender
              </div>
              </form>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-offset-1 col-xs-9">
                <button className="botao" type="button">Confirmar</button>
                <button className="botao" type="button">Voltar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AbrirContrato.prototypes = {
  idC: PropTypes.any.isRequired,
};

export default AbrirContrato;

