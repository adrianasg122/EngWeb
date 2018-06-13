import React, { Component } from 'react';
import HistList from './components/HistList';

class Historico extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioL: [],
      portFCounter: 0
    }
  }

  loadData() {
    var data;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function() {
        data = JSON.parse(this.responseText);
    }
    xmlhttp.send();
    var portfolio,x;
    portfolio = [];
    for (x in data) {
      const newPort = {
        id: data[x].id,
        initials: data[x].initials,
        ask: data[x].ask,
        units: data[x].id,
        open: data[x].open,
        volume: data[x].volume,
        market_cap: data[x].market_cap
      };
      portfolio = portfolio.concat(newPort);
    }
    this.setState({
      portfolioL: portfolio,
      portFCounter: portfolio.length
    });
  }

  componentDidMount() {
    this.loadData();
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
        <HistList portFs={this.state.portfolioL} onclick={(id) => this.openPortF(id)}/>
      </div>
    </div>
    );
  }
}

export default Historico;
