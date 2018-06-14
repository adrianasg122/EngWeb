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
      .then(res => this.setState({ data: res }));
  }

  confirm() {
    fetch('/ESS/fechar', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.data.map(contrato => (contrato.id)),
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        window.location.replace("/Portfolio");
      })
      .then(res => this.setState({ response: res }));
  }

  render() {
    console.log(this.state.data)
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      window.location.replace("/");
      return null;
    }
    return (
      <div className="FecharContrato">
      <h1 className="titulo w3-padding-16">Contrato {this.state.data.map(contrato => (contrato.idCoin))} </h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
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
                  <b>Tipo:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => contrato.venda)===1?"Venda":"Compra"}
                </div>
              </div>
              <div className="row w3-padding-16">
                <div className="col-xs-6 col-md-6">
                  <b>Valor:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => (<p> {contrato.priceA} $ </p>))}
                </div>
              </div>
              <div className="row ">
                <div className="col-xs-6 col-md-6">
                  <b>Quantidade:</b>
                </div>
                <div className="col-xs-6 col-md-6">
                  {this.state.data.map(contrato => (<p> {contrato.quant} </p>))}
                </div>
              </div>
            </div>
          </div>
          <div className="abrirC row col-xs-offset-4">
            <div className="col-xs-8 ">
              <button className="botao botaoF" type="button" onClick={() => this.confirm()}>Fechar Contrato</button>
              <button className="botao" type="button" onClick={() => window.location.replace("/Portfolio")}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default FecharContrato;

