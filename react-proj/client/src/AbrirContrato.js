import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AbrirList from './components/abrirList';

class AbrirContrato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var pedido ='/ESS/Coin?id=' + localStorage.getItem("abrirC")
    fetch(pedido)
      .then(res => res.json)
      .then(data => { this.setState({ data: data }), console.log(data) });
  }

  render() {
    return (
      <div className="AbrirContrato">
        <AbrirList abrirFs={this.state.data} />
      </div>
    );
  }
}

export default AbrirContrato;

