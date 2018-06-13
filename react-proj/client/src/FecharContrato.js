import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AbrirList from './components/fecharList';

class FecharContrato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var pedido ='/ESS/Coin?id=' + localStorage.getItem("fecharC")
    fetch(pedido)
      .then(res => res.json)
      .then(data => { this.setState({ data: data }), console.log(data) });
  }

  render() {
    return (
      <div className="FecharContrato">
        <FecharList fecharFs={this.state.data} />
      </div>
    );
  }
}

export default FecharContrato;