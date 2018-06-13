import React, { Component } from 'react';

class PortList extends Component {
  render() {
    return (
      <table className="port-list w3-table-all">
      <thead><tr>
        <th>Ativo</th>
        <th>Preço</th>
        <th>Tipo</th>
        <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.portFs.map(port => (
            <tr className='tableHover' key={port.id}>
            <td>{port.coin}</td>
            <td>{port.valor}</td>
            <td>{port.tipo}</td>
            <td>{port.quantidade}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}

export default PortList;