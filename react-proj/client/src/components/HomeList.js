import React, { Component } from 'react';

class HomeList extends Component {

  render() {
    return (
      <table className="home-table w3-table-all">
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Variação % (1h)</th>
            <th>Venda €</th>
            <th>Compra €</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.homeFs.map(home => (
              <tr className='tableHover' key={home.id} onClick={() => this.props.onClick(home.id)}>
                <td>{home.name}</td>
                <td>{home.percentageChange}</td>
                <td>{home.id}</td>
                <td>{home.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

}

export default HomeList;