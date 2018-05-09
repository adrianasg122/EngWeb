import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, browserHistory, StaticRouter } from 'react-router';
import Portfolio from './Portfolio';
import Registo from './Registo.js';




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logged: false
        }
    }

    handleSignIn(e) {
        e.preventDefault()
        console.log("Before " + this.state.username);
        console.log("Before " + this.state.password);
        this.setState({ username: this.refs.username.value });
        this.setState({ password: this.refs.password.value });
        console.log("After " + this.state.username);
        console.log("After " + this.state.password);
        if ((this.state.username !== undefined && this.state.username !== '') && (this.state.password !== undefined && this.state.username !== '')) {
            console.log("2 submited");
            this.setState({ logged: true });
            // duvida aqui !!!!!!
            // browserHistory.push('/Portfolio');
            // React.render(Portfolio);
            window.location.replace("/App");
        }
        else {
            console.log("not");
        }
    }

    componentWillMount() {

    }


    render() {
        return (
            <div className="Login">
                <div className="w3-container w3-padding-16">
                    <form onSubmit={this.handleSignIn.bind(this)}>
                        <div className="w3-container w3-center w3-padding-32" >
                            <p className="input_desc"> Username </p>
                            <input className="input" type="text" ref="username" />
                        </div>
                        <div className="w3-container w3-center ">
                            <p className="input_desc"> Password </p>
                            <input className="input" type="password" ref="password" />
                        </div>
                        <div className="row w3-padding-32 w3-padding-large">
                            <div className="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                                <a className="botao" href="/Registo">Registar</a>
                            </div>
                            <div className="col-md-1 col-xs-2">
                                <a className="botao " href="/">Entrar</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}





export default Login;