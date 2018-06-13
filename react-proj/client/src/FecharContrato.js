import React, { Component } from 'react';


class FecharContrato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var pedido = '/ESS/Contrato?id=' + localStorage.getItem("fecharC");
    fetch(pedido)
      .then(res => res.json())
      .then(res => this.setState({ data: res[0] }));

  }

  confirm() {
    fetch('/ESS/fechar', {
      method: 'POST',
      body: JSON.stringify({
        user: localStorage.getItem("user"),
        id: localStorage.getItem("fecharC"),
        price: this.state.data.price,
        quant: this.state.data.quant,
        idCoin: this.state.data.idCoin
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function () {
        window.location.replace("/");
      })
      .then(res => this.setState({ response: res }));
  }

  render() {
    return (
      <div className="FecharContrato">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1 className="titulo w3-padding-16">Contrato {this.state.data.map(contrato => (contrato.idCoin))} </h1>
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
              <div className="row contrato">
                <div className="col-xs-6 col-md-6">
                  <b>Nome ativo:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => (<p> {contrato.idCoin} </p>))}
                </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Tipo*:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => contrato.venda)}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <b>Valor:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => (<p> {contrato.price} $ </p>))}
                </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Quantidade:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => (<p> {contrato.quant} </p>))}
                </div>
              </div>
              <p>*Venda(1)\Compra(0)</p>
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
              <button className="botao" type="button" onClick={this.confirm()}>Fechar Contrato</button>
              <button className="botao" type="button" onClick={() => window.location.replace("/Portfolio")}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default FecharContrato;

