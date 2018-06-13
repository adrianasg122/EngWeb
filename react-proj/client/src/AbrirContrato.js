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
    fetch ('/ESS/contrato?id=' + localStorage.getItem("abrirC"))
    .then(res => res.json)
    .then(data => {this.setState({ data: data}),console.log(data)});
  }

  render() {
    return (
      <div className="AbrirContrato">
        <h1>Facebook, Inc.</h1>
        <AbrirList abrirFs={this.state.data} />
      </div>
    );
  }
}

AbrirContrato.prototypes = {
  idC: PropTypes.any.isRequired,
};

export default AbrirContrato;

