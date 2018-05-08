import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, browserHistory, StaticRouter } from 'react-router';
import Portfolio from './Portfolio';

class Registo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            username:'',
            password:''
        }
      }

      handleSignIn(e) {
        e.preventDefault()
        console.log("Before " + this.state.username) ; 
        console.log("Before " + this.state.password) ; 
        this.setState({ nome: this.refs.pnome.value }); 
        this.setState({ username: this.refs.username.value }); 
        this.setState({ password: this.refs.password.value }); 
        console.log("After " + this.state.username) ; 
        console.log("After " +this.state.password) ; 
        if ( (this.state.username !== '' && this.state.username !== '' && this.state.password !== '') && this.state.password===this.refs.passwordC.value){
            console.log("ok") ; 
            this.setState({ logged: true }); 
            // duvida aqui !!!!!!
            // browserHistory.push('/Portfolio');
            // React.render(Portfolio);
            window.location.replace("/");
        }
        else {
            console.log("not ok") ; 
        }
      }
      


  render() {
    return (
<div className="Registo">  
    <div class="w3-container w3-center  w3-margin-top">        
      <form onSubmit={this.handleSignIn.bind(this)}> 
        <div class="w3-container w3-center w3-padding-8" >
            <p className="input_desc"> Primeiro Nome </p>
            <input type="text" ref="pnome"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8" >
            <p className="input_desc"> Último Nome </p>
            <input type="text" ref="unome"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8" >
            <p className="input_desc"> Username </p>
            <input type="text" ref="username"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8" >
            <p className="input_desc"> Contacto </p>
            <input type="text" ref="contacto"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8" >
            <p className="input_desc"> Plafond Inicial </p>
            <input type="text" ref="plafond"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8">
                <p className="input_desc"> Password </p>
                <input type="password" ref="password"/>
                <p className="input_desc"> Confirmar Password </p>
                <input type="password" ref="passwordC"/>
        </div>
        <div class="row w3-center w3-padding-16 w3-padding-large">
            <div class="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                <a className="botao" href="/">Voltar</a>
            </div>
            <div class="col-md-1 col-xs-2">
                <a className="botao" onClick={this.handleSignIn.bind(this)}>Registar</a>
            </div>
          </div>
        </form>
    </div>
</div>
        );
    }
}


export default Registo;