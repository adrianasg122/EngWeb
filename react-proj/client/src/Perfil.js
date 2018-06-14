import React, { Component } from 'react';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      user: [],
      portfolioL: [],
      investedValue: ''
  }}

  loadData(data) {
    var portfolio, x;
    portfolio = [];
    for (x in data) {
        const newPort = {
            id: data[x].id,
            coin: data[x].idCoin,
            quantidade: data[x].quant,
            precoA: data[x].priceA,
            dataA: data[x].dataA,
            tipo: data[x].venda,
        };
        portfolio = portfolio.concat(newPort);
    }

    let invest = 0;
    var i;
    for (i in portfolio) {
        var valueTransaction = portfolio[i].quantidade;
        var unitsTransaction = portfolio[i].quantidade * 1.0 / portfolio[i].precoA;
        var buySell = portfolio[i].tipo;
        var currentValue = this.state.data.filter(coinH => coinH.id === portfolio[i].coin)[0].price;
        invest = invest + ((buySell === 0) ?
        (currentValue - valueTransaction) * unitsTransaction + valueTransaction * unitsTransaction :
        (valueTransaction - currentValue) * unitsTransaction + valueTransaction * unitsTransaction);
    }


    this.setState({
        portfolioL: portfolio,
        investedValue: invest
    });
}


  componentDidMount() {
    fetch('/ESS/user?username=' + localStorage.getItem("user"))
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
      fetch('/ESS/coins')
                .then(res => res.json())
                .then(data => this.setState({ data: data }));
      fetch('/ESS/contratos?username=' + localStorage.getItem("user"))
                .then(res => res.json())
                .then(res => this.loadData(res));
  }

  render() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      window.location.replace("/");
      return null;
    }
    document.getElementById("perfilNavBar").className = document.getElementById("perfilNavBar").className.concat(" w3-white");
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
                {this.state.user.map(user => (<p> {user.pname} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Ultimo Nome:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.uname} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Username:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.username} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Email:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.email} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Telemóvel:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.contact} </p>))}
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2 w3-margin-top">
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Saldo Disponivel:</b>
              </div>
              <div className="col-sm-6 col-md-4">
                {this.state.user.map(user => (<span> {Math.round(user.saldo * 1000) / 1000} $</span>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Valor investimentos:</b>
              </div>
              <div className="col-sm-6 col-md-4">
              {Math.round(this.state.investedValue*1000) / 1000} $
              </div>
            </div>
            <div className="col-xs-offset-1 col-xs-12 w3-padding-16">
              <div className="col-sm-6 col-md-8">
                <b>Carregar conta</b>
              </div>
              <div className="col-sm-6 col-md-4">
                <i className="paypal fa fa-paypal w3-button w3-hover-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perfil row ">
        </div>
      </div>
    );
  }
}


export default Perfil;
