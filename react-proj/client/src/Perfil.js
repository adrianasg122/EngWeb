import React, { Component } from 'react';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user: []
    }
  }

  componentDidMount() {
    fetch('/ESS/user?username=' + localStorage.getItem("user"))
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
  }

  render() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      window.location.replace("/");
      return null;
    }
    document.getElementById("perfilNavBar").className = document.getElementById("perfilNavBar").className.concat(" w3-white");
    return (
      <div className="Perfil">
        <h1 className="titulo">O Meu Perfil</h1>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1  ">
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Primeiro Nome:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.pname} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Ultimo Nome:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.uname} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Username:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.username} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Email:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.email} </p>))}
              </div>
            </div>
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-6">
                <b>Telemóvel:</b>
              </div>
              <div className="col-sm-6 col-md-6">
                {this.state.user.map(user => (<p> {user.contact} </p>))}
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2 w3-margin-top">
            <div className="perfil row w3-border-bottom">
              <div className="col-sm-6 col-md-8">
                <b>Saldo:</b>
              </div>
              <div className="col-sm-6 col-md-4">
                {this.state.user.map(user => (<p> {user.saldo} </p>))}
              </div>
            </div>
            <div className="col-xs-offset-1 col-xs-12 w3-padding-16">
              <div className="col-sm-6 col-md-8">
                <b>Carregar conta</b>
              </div>
              <div className="col-sm-6 col-md-4">
                <i className="paypal fa fa-paypal w3-button w3-hover-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perfil row ">
        </div>
      </div>
    );
  }
}


export default Perfil;
