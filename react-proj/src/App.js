import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        i:0
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
    switch(name.toString()){
      case "Comm":
        document.getElementById("bComm").className += " w3-red";
        break;
      case "Acao":
        document.getElementById("bAcao").className += " w3-red";
    }
  }

  render() {

    var data, tables;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function() {
        data = JSON.parse(this.responseText);
    }
    xmlhttp.send();

    var txt = "", x;
      txt += "<table id=\"tableID\"class=\"w3-table-all\" style=\"cursor: pointer;\" >"
        txt+="<tr><th> Ativo </th><th>Total invstido(€)</th><th>Preço Abertura(€)</th><th>Preço Fecho(€)</th><th>Data Abertura</th><th>Data fecho</th><th>Ganho/perda(€)</th><th>Ganho/Perda(%)</th></tr>";
      
      for (x in data) {
          txt += "<tr class=\"tableHover\"><td>" + data[x].initials + "</td><td>" + data[x].ask + "</td><td>" + data[x].id + "</td><td>" + data[x].open + "</td><td>" + data[x].volume + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td></tr>";
      }
      txt += "</table>"
      window.onload = function() {
        this.document.getElementById("Comm").style.display="block";
        tables = document.getElementsByClassName("table");
        for (var i = 0; i < tables.length; i++) {
          tables[i].innerHTML = txt;
        }
      }
           
    return (
      <div className="App w3-container row">  
        <div className="w3-row-padding w3-container w3-sidebar w3-collapse w3-bar-block w3-light-grey w3-card col-sm-2 sidebar" id="mySidebar">
          <button className="w3-bar-item w3-button w3-red tablink" id="bComm" onClick={this.openTab.bind(this,'Comm')}>Commodities</button>
          <button className="w3-bar-item w3-button tablink" id="bAcao" onClick={this.openTab.bind(this, 'Acao')}>Ações</button>
        </div>

      <div className="w3-container row">
        <div id="Comm" className="tabcontent w3-container offset-md-3 col-sm-9">
            <h2> Commodities</h2>
            <div className="w3-container table"></div>
        </div>
        <div id="Acao" class="tabcontent w3-container offset-md-3 col-sm-9">
            <h2> Ações</h2>
            <div className="w3-container table"></div>
        </div>
      </div>
      </div>
    );
  }
}


export default App;
