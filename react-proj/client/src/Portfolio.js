import React, { Component } from 'react';
import PortList from './components/PortList';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioL: [],
    }
  }

  loadData(data) {
    var portfolio,x;
    portfolio = [];
    for (x in data) {
      const newPort = {
        id: data[x].id,
        coin: data[x].idCoin,
        quantidade: data[x].quant,
        valor: data[x].price,
        askbid: data[x].venda,
        estado: data[x].concluido,
      };
      portfolio = portfolio.concat(newPort);
    }
    this.setState({
      portfolioL: portfolio,
      portFCounter: portfolio.length
    });
  }

  componentDidMount() {
    fetch('/ESS/contratos?username='+ localStorage.getItem("user"))
      .then(res => res.json())
      .then(data => this.loadData(data));
    document.getElementById("portfolioNavBar").className = document.getElementById("portfolioNavBar").className.concat(" w3-white");
  }

  openPortF(id) {
    console.log(id);
  }


  fecharContrato(id) {
    localStorage.setItem("fecharC", id);
    window.location.replace("/FecharContrato");
}


  render() {
    return (
      <div className="Portfolio">  
        <div className="w3-container col-xs-12 col-md-offset-1 col-md-10 w3-padding-16">
          <h1 className="titulo"> Portfólio </h1>
          <PortList portFs={this.state.portfolioL} onclick={(id) => this.fecharContrato(id)}/>
        </div>
      </div>
    );
  }
}



export default Portfolio;
