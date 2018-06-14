import React, { Component } from 'react';

class HomeList extends Component {

  render() {
    return (
      <table className="home-table w3-table-all">
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Variação % (1h)</th>
            <th>Compra</th>
            <th>Venda</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.homeFs.map(home => (
              <tr className='tableHover' key={home.id} onClick={() => this.props.onClick(home.id)}>
                <td>{home.name}</td>
                <td>{home.percentageChange}</td>
                <td>{Math.round(home.price*1.05 * 1000) /1000} $</td>
                <td>{ Math.round(home.price*0.95 * 1000) /1000 } $</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

}

export default HomeList;