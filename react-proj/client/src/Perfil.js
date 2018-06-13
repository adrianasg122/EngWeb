import React, { Component } from 'react';
import PerfilList from './components/PerfilList';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user: []
    }
  }

  componentDidMount() {
    fetch('/ESS/user')
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
  }

  render() {
    document.getElementById("perfilNavBar").className = document.getElementById("perfilNavBar").className.concat(" w3-white");
    return (
      <div className="Perfil">
        <h1 className="titulo">O Meu Perfil</h1>
        <PerfilList perfilFs={this.state.user} />
        <div className="perfil row ">
        </div>
      </div>
    );
  }
}


export default Perfil;
