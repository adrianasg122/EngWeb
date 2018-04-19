import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Historico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    var data;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function() {
        data = JSON.parse(this.responseText);
        console.log(data);
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
        document.getElementById("table").innerHTML = txt;
        var table = document.getElementById("tableID");
        var rows = table.getElementsByTagName("tr");
        for ( var i = 0; i < rows.length; i++) {
          var currentRow = table.rows[i];
          var createClickHandler = function(row) {
            return function() {
              var cell = row.getElementsByTagName("td")[0];
              var id = cell.innerHTML;
              alert("id:" + id);
            };
          }
            currentRow.onclick = createClickHandler(currentRow);
        }
      }
      

    return (
    <div className="Historico">  
      <div class="w3-container w3-center w3-padding-16">
        <h3> HISTÓRICO </h3>
        <div id="table"></div>
      </div>
    </div>
    );
  }
}

export default Historico;
