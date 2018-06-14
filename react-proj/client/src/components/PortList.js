import React, { Component } from 'react';

class PortList extends Component {
  render() {
    return (
      <table className="port-list w3-table-all">
      <thead>
      <tr>
          <th>Id</th>
          <th>Coin</th>
          <th>Quantidade</th>
          <th>Valor Compra(€)</th>
          <th>Ask/Bid</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.portFs.map(port => (
            <tr className='tableHover' key={port.id} onClick={() => this.props.onclick(port.id)}>
            <td>{port.id}</td>
            <td>{port.coin}</td>
            <td>{port.quantidade}</td>
            <td>{port.valor}</td>
            <td>{port.askbid===0?"Compra":"Venda"}</td>
            <td>{port.estado}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}

export default PortList;