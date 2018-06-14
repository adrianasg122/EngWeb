import React, { Component } from 'react';
import HistList from './components/HistList';

class Historico extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioL: []
    }
  }

  loadData(data) {
    var portfolio, x;
    portfolio = [];
    for (x in data) {
      const newPort = {
        id: data[x].id,
        coin: data[x].idCoin,
        quantidade: data[x].quant,
        tipo: data[x].venda,
        precoA: data[x].priceA,
        precoF: data[x].priceF,
        dataA: data[x].dataA,
        dataF: data[x].dataF,
      };
      portfolio = portfolio.concat(newPort);
    }
    this.setState({
      portfolioL: portfolio,
    });
  }

  componentDidMount() {
    fetch('/ESS/hist?username=' + localStorage.getItem("user"))
      .then(res => res.json())
      .then(data => this.loadData(data));
    document.getElementById("historicoNavBar").className = document.getElementById("historicoNavBar").className.concat(" w3-white");
  }

  openPortF(id) {
    console.log(id);
  }

  render() {

    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      window.location.replace("/");
      return null;
    }
    return (
      <div className="Historico">
        <div className="w3-container col-xs-12 col-md-offset-1 col-md-10 w3-padding-16">
          <h1 className="titulo"> Histórico </h1>
          <HistList portFs={this.state.portfolioL} />
        </div>
      </div>
    );
  }
}

export default Historico;
