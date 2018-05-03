import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect , browserHistory , StaticRouter } from 'react-router';
import Portfolio from './Portfolio';
import Registo  from './Registo.js';




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
      }

    handleSignIn(e) {
        e.preventDefault()
        console.log("Before " + this.state.username) ; 
        console.log("Before " + this.state.password) ; 
        this.setState({ username: this.refs.username.value }); 
        this.setState({ password: this.refs.password.value }); 
        console.log("After " + this.state.username) ; 
        console.log("After " +this.state.password) ; 
        if ( (this.state.username !== undefined && this.state.username !== '') && (this.state.password !== undefined && this.state.username !== '') ){
            console.log("2 submited") ; 
            this.setState({ logged: true }); 
            // duvida aqui !!!!!!
            // browserHistory.push('/Portfolio');
            // React.render(Portfolio);
            window.location.replace("/Perfil");
        }
        else {
            console.log("not") ; 
        }
      }

      componentWillMount(){

      }


  render() {
    return (
<div className="Login">  

    <div class="w3-container w3-center  w3-padding-16">        
      <form onSubmit={this.handleSignIn.bind(this)}> 
        <div class="w3-container w3-center w3-padding-16" >
            <p> Username </p>
            <input type="text" ref="username"/> 
        </div>
        <div class="w3-container w3-center w3-padding-16">
            <p> Password </p>
            <input type="password" ref="password"/>
        </div>
        <div class="row w3-center w3-padding-16 w3-padding-large">
            <div class="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">                
                <Link to="/Registo"><button>Registar</button></Link>
            </div>
            <div class="col-md-1 col-xs-2">
                <button>Login</button> 
            </div>
        </div>
    </form>
    </div>
      
</div>
    );
  }
}





export default Login;