import React, { Component } from 'react';

class PortList extends Component {
  render() {
    return (
      <table className="port-list w3-table-all">
      <thead>
      <tr>
          <th>Id contrato</th>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Preço abertura</th>
          <th>Data abertura</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.portFs.map(port => (
            <tr className='tableHover' key={port.id} onClick={() => this.props.onclick(port.id)}>
            <td>{port.id}</td>
            <td>{port.coin}</td>
            <td>{port.quantidade}</td>
            <td>{port.precoA}</td>
            <td>{port.dataA}</td>
            <td>{port.tipo===0?"Compra":"Venda"}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}

export default PortList;