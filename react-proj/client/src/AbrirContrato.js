import React, { Component } from 'react';


class AbrirContrato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: '',
        name: '',
        symbol: '',
        price: '',
        percentageChange: '',
        lastModDate: '',
        quant: ''
      }
    }
  }

  componentDidMount() {
    var pedido = '/ESS/Coin?id=' + localStorage.getItem("abrirC");
    fetch(pedido)
      .then(res => res.json())
      .then(res => this.setState({ data: res[0] }));
  }


  onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })

  onSubmit = () => {
    fetch('/ESS/addCont', {
      method: 'POST',
      body: JSON.stringify({
          user: localStorage.getItem("user"),
          id: this.state.data.id,
          price: this.state.data.price,
          quant: this.state.data.quant
      }),
      headers: { "Content-Type": "application/json" }
  })
      .then(function () {
          window.location.replace("/");
      })
      .then(res => this.setState({ response: res }));

  }

  render() {
    console.log(this.state.data)
    return (
      <div className="AbrirContrato">
        <h1> {this.state.data.name}</h1>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1 ">
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Sigla:</b>
              </div>
              <div className="col-xs-6 col-md-6">
                {this.state.data.symbol}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Abertura:</b>
              </div>
              <div className="col-xs-6 col-md-6">
                {this.state.data.price}
              </div>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-6 col-md-6">
                <b>Compra:</b>
              </div>
              <div className="col-xs-6 col-md-6">
                {this.state.data.price * 1.05}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <b>Venda:</b>
              </div>
              <div className="col-xs-6 col-md-6">
                {this.state.data.price * 0.95}
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2">
            <div className="row w3-padding-16">
              <div className="col-xs-6">
                <b>Saldo:</b>
              </div>
              <div className="col-xs-6">
                1000€
              </div>
            </div>
            <div className="row w3-padding-16">
              <input className="col-xs-6 col-xs-offset-1" type="text" name="quant" id="quant" value={this.state.data.quant} onChange={this.onChange} />
            </div>
            <div className="row">
              <form action="">
                <div className="col-xs-6">
                  <input type="radio" name="comprarVender" value="comprar" /> Comprar
              </div>
                <div className="col-xs-6">
                  <input type="radio" name="comprarVender" value="vender" /> Vender
              </div>
              </form>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-offset-1 col-xs-9">
                <button className="botao" type="button" onClick={this.onSubmit}>Confirmar</button>
                <button className="botao" type="button">Voltar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AbrirContrato;

