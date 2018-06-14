import React, { Component } from 'react';

class PortList extends Component {
  render() {
    return (
      <table className="port-list w3-table-all">
      <thead><tr>
        <th>Ativo</th>
        <th>Preço Abertura</th>
        <th>Preço Fecho</th>
        <th>Data Abertura</th>
        <th>Data Fecho</th>
        <th>Tipo</th>
        <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.portFs.map(port => (
            <tr className='tableHover' key={port.id}>
            <td>{port.coin}</td>
            <td>{port.precoA}</td>
            <td>{port.precoF}</td>
            <td>{port.dataA}</td>
            <td>{port.dataF}</td>
            <td>{port.tipo === 0?"Compra":"Venda"}</td>
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