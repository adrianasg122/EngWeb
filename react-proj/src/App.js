import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      i: 0
    }
  }

  openTab(name) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("w3-red", "");
    }
    document.getElementById(name.toString()).style.display = "block";
    switch (name.toString()) {
      case "Comm":
        document.getElementById("bComm").className += " w3-red";
        break;
      case "Acao":
        document.getElementById("bAcao").className += " w3-red";
        break;
    }
  }

  render() {

    var data, tables;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function () {
      data = JSON.parse(this.responseText);
    }
    xmlhttp.send();

    var txt = "", x;
    txt += "<table id=\"tableID\"class=\"w3-table-all\" style=\"cursor: pointer;\" >"
    txt += "<tr><th> Ativo </th><th>Total invstido(€)</th><th>Preço Abertura(€)</th><th>Preço Fecho(€)</th><th>Data Abertura</th><th>Data fecho</th><th>Ganho/perda(€)</th><th>Ganho/Perda(%)</th></tr>";

    for (x in data) {
      txt += "<tr class=\"tableHover\"><td>" + data[x].initials + "</td><td>" + data[x].ask + "</td><td>" + data[x].id + "</td><td>" + data[x].open + "</td><td>" + data[x].volume + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td></tr>";
    }
    txt += "</table>"
    window.onload = function () {
      this.document.getElementById("Comm").style.display = "block";
      tables = document.getElementsByClassName("table");
      for (var i = 0; i < tables.length; i++) {
        tables[i].innerHTML = txt;
      }
    }
    document.getElementById("homeNavBar").className = document.getElementById("homeNavBar").className.concat(" w3-white");
    return (
      <div className="App w3-container row">
        <div id="mySidebar" className="w3-container sidebar w3-collapse w3-bar-block w3-light-grey w3-card col-xs-2">
          <a className="w3-bar-item w3-button w3-red tablink " id="bComm" onClick={this.openTab.bind(this, 'Comm')}>Commodities</a>
          <a className="w3-bar-item w3-button tablink" id="bAcao" onClick={this.openTab.bind(this, 'Acao')}>Ações</a>
        </div>

        <div className="w3-container col-xs-12 col-md-offset-2 col-md-10">
          <div id="Comm" className="tabcontent w3-container">
            <h2 id="ComodAcao" class="titulo"> Commodities</h2>
            <div className="w3-container table w3-padding-32"></div>
          </div>
          <div id="Acao" class="tabcontent w3-container">
            <h2 id="ComodAcao" class="titulo"> Ações</h2>
            <div className="w3-container table w3-padding-32"></div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
