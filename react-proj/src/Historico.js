import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Historico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    var data;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function () {
      data = JSON.parse(this.responseText);
      console.log(data);
    }
    xmlhttp.send();

    var txt = "", x;
    txt += "<table id=\"tableID\"class=\"w3-table-all\" >"
    txt += "<tr><th> Ativo </th><th>Total investido(€)</th><th>Preço Abertura(€)</th><th>Preço Fecho(€)</th><th>Data Abertura</th><th>Data fecho</th><th>Ganho/perda(€)</th><th>Ganho/Perda(%)</th></tr>";

    for (x in data) {
      txt += "<tr><td>" + data[x].initials + "</td><td>" + data[x].ask + "</td><td>" + data[x].id + "</td><td>" + data[x].open + "</td><td>" + data[x].volume + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td><td>" + data[x].market_cap + "</td></tr>";
    }
    txt += "</table>"
    window.onload = function () {
      document.getElementById("table").innerHTML = txt;
    }


    document.getElementById("historicoNavBar").className = document.getElementById("historicoNavBar").className.concat(" w3-white");
    return (
      <div className="Historico">
        <div class="w3-container w3-padding-16">
          <h1 class="titulos"> Histórico </h1>
          <div id="table"></div>
        </div>
      </div>
    );
  }
}

export default Historico;
