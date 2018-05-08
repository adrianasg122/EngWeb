import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FecharContrato extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    return (
      <div className="FecharContrato">
        <div className="row">
        <div className="col-xs-12 col-md-6">
          <h1 class="titulo">Contrato #123</h1>
          <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 w3-border ">
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Sigla:
                </div>
              <div className="col-xs-6 col-md-6">
                FB
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Empresa:
                </div>
              <div className="col-xs-6 col-md-6">
                Facebook, Inc
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Tipo:
                </div>
              <div className="col-xs-6 col-md-6">
              Buy
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
              Valor:
                </div>
              <div className="col-xs-6 col-md-6">
                164.75
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
              Investido:
                </div>
              <div className="col-xs-6 col-md-6">
              900€
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
              Data:
              </div>
              <div className="col-xs-6 col-md-6">
              12-12-2017
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
              Lucro:
                </div>
              <div className="col-xs-6 col-md-6">
              -120€
                </div>
            </div>
          </div>
          </div>
          <div className="col-xs-12 col-md-6">
        <h1>Facebook, Inc.</h1>
          <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 w3-border ">
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Sigla:
                </div>
              <div className="col-xs-6 col-md-6">
                FB
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Abertura:
                </div>
              <div className="col-xs-6 col-md-6">
                166.13
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Compra:
                </div>
              <div className="col-xs-6 col-md-6">
                164.75
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Venda:
                </div>
              <div className="col-xs-6 col-md-6">
                164.88
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Valor Mercado:
                </div>
              <div className="col-xs-6 col-md-6">
                479.005B
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Volume:
              </div>
              <div className="col-xs-6 col-md-6">
                73,570,230
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Volume Médio:
                </div>
              <div className="col-xs-6 col-md-6">
                21,993,430
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                Ultimo Fecho:
                </div>
              <div className="col-xs-6 col-md-6">
                169.39
                </div>
            </div>
          </div>
          </div>
            <div className="row col-xs-offset-1">
              <div className="col-xs-2">
                <button type="button">Fechar Contrato</button>
              </div>
              <div className="col-xs-2 col-xs-offset-1">
                <button type="button">Voltar</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


export default FecharContrato;

