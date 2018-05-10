import React, { Component } from 'react';

class Portfolio extends Component {
  
  render() {
    var data;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json", false);
    xmlhttp.onload = function() {
        data = JSON.parse(this.responseText);
    }
    xmlhttp.send();


    var txt = "", x;
      txt += "<table id=\"tableID\"class=\"w3-table-all\" style=\"cursor: pointer;\" >"
        txt+="<tr><th> Ativo </th><th>Preço Compra(€)</th><th>Unidades adquiridas</th><th>Total investido(€)</th><th>Ganho/perda(€)</th><th>Ganho/perda(%)</th></tr>";
      
      for (x in data) {
          txt += "<tr class=\"tableHover\"><td>" + data[x].initials + "</td><td>" + data[x].ask + "</td><td>" + data[x].id + "</td><td>" + data[x].open + "</td><td>" + data[x].volume + "</td><td>" + data[x].market_cap + "</td></tr>";
      }
      txt += "</table>"
      window.onload = function() {
        document.getElementById("tabela").innerHTML = txt;
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
          };
          currentRow.onclick = createClickHandler(currentRow);
        }  
      }

    document.getElementById("portfolioNavBar").className = document.getElementById("portfolioNavBar").className.concat(" w3-white");
    return (
      <div className="Portfolio">  
        <div className="w3-container col-xs-12 col-md-offset-1 col-md-10 w3-padding-16">
          <h1 className="titulo"> Portfólio </h1>
          <div id="tabela"></div>
        </div>
      </div>
    );
  }
}



export default Portfolio;
