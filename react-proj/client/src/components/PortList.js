import React, { Component } from 'react';

class PortList extends Component {
  render() {
    return (
      <table className="port-list w3-table-all">
      <thead>
      <tr>
          <th>Ativo</th>
          <th>Preço Compra(€)</th>
          <th>Unidades adquiridas</th>
          <th>Total investido(€)</th>
          <th>Ganho/perda(€)</th>
          <th>Ganho/perda(%)</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.portFs.map(port => (
            <tr className='tableHover' key={port.id} onClick={() => this.props.onclick(port.id)}>
            <td>{port.initials}</td>
            <td>{port.ask}</td>
            <td>{port.id}</td>
            <td>{port.open}</td>
            <td>{port.volume}</td>
            <td>{port.market_cap}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}

export default PortList;