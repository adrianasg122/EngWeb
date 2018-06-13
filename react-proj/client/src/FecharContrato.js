import React, { Component } from 'react';


class FecharContrato extends Component {

  render() {
    return (
      <div className="FecharContrato">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1 className="titulo w3-padding-16">Contrato #123</h1>
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
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
                  <b>Empresa:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  Facebook, Inc
                </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Tipo:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  Buy
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <b>Valor:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  164.75
                </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Investido:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  900€
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <b>Data:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  12-12-2017
              </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Lucro:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  -120€
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1 className="titulo w3-padding-16">Facebook, Inc.</h1>
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
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
                  <b>Último Fecho:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  169.39
                </div>
              </div>
            </div>
          </div>
          <div className="row col-xs-offset-2">
            <div className="col-xs-4 ">
              <button className="botao" type="button">Fechar Contrato</button>
              <button className="botao" type="button" onClick={() => window.location.replace("/Portfolio")}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default FecharContrato;

