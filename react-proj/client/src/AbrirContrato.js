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
      },
      user: [],
      errors: []
    }
  }

  componentDidMount() {
    document.getElementById("comprarRadioButton").checked = true;
    var pedido = '/ESS/Coin?id=' + localStorage.getItem("abrirC");
    fetch(pedido)
      .then(res => res.json())
      .then(res => this.setState({ data: res[0] }));
    fetch('/ESS/user?username=' + localStorage.getItem("user"))
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
  }


  onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })

  onSubmit = () => {
    const errors = this.validateData(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      fetch('/ESS/addCont', {
        method: 'POST',
        body: JSON.stringify({
          user: localStorage.getItem("user"),
          id: this.state.data.id,
          price: (document.getElementById("comprarRadioButton").checked?this.state.data.price*1.05:this.state.data.price*0.95),
          quant: this.state.data.quant,
          venda: (document.getElementById("comprarRadioButton").checked?0:1)
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(function () {
          window.location.replace("/");
        })
        .then(res => this.setState({ response: res }));
    }
  }
  validateData = (data) => {
    const errors = {};
    var saldo = this.state.user[0].saldo;
    if (!data.quant) errors.quant = "Can't be blank";
    else if (isNaN(data.quant)) errors.quant = "Must be a valid number";
    else if (data.quant > saldo) errors.quant = "Saldo insuficiente";
    return errors;
  }

  inlineError = ({ text }) => <div className="w3-container w3-center "><span style={{ color: "#ae5856" }}>{text}</span></div>

  render() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      window.location.replace("/");
      return null;
    }
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
              {this.state.user.map(user => (<p> {user.saldo} </p>))}
              </div>
            </div>
            <div className="row w3-padding-16">
            <div className="col-xs-6">
                <b>Valor a investir:</b>
              </div>
              <input className="col-xs-6" type="text" name="quant" id="quant" value={this.state.data.quant} onChange={this.onChange} />
              {this.state.errors.quant && <this.inlineError text={this.state.errors.quant} />}
            </div>
            <div className="row">
              <form action="">
                <div className="col-xs-6">
                  <input id="comprarRadioButton" type="radio" name="comprarVender" /> Comprar
              </div>
                <div className="col-xs-6">
                  <input id="venderRadioButton" type="radio" name="comprarVender" /> Vender
              </div>
              </form>
            </div>
            <div className="row w3-padding-16">
              <div className="col-xs-offset-1 col-xs-9">
                <button className="botao" type="button" onClick={this.onSubmit}>Confirmar</button>
                <button className="botao" type="button" onClick={() => window.location.replace("/")}>Voltar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AbrirContrato;

