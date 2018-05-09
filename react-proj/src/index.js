import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Teste from './Teste.js';
import Perfil from './Perfil.js';
import Portfolio from './Portfolio.js';
import Historico from './Historico.js';
import Login from './Login.js';
import AbrirContrato from './AbrirContrato.js';
import FecharContrato from './FecharContrato.js';
import Registo from './Registo.js';



class Index extends Component {
    state = {
        data: {
            user: {
                username: '',
                password: '',
            }
        },
        logged: false,
        errors: {},
    }

    submitLogin = logData => this.setState({ data: { ...this.state.data, user: logData } })

    render() {
        console.log(this.state)
        return (
            <Router >
                <div>
                    <Route exact path="/Login" render={() => <Login submit={this.submitLogin} />} />
                    <Route exact path="/" component={App} />
                    <Route exact path="/Registo" component={Registo} />
                    <Route path="/Teste" component={Teste} />
                    <Route path="/Perfil" render={() => <Perfil username={this.state.data.user.username} />} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Historico" component={Historico} />
                    <Route path="/AbrirContrato" component={AbrirContrato} />
                    <Route path="/FecharContrato" component={FecharContrato} />
                </div>
            </Router>
        );
    }
}

render(<Index />, window.document.getElementById('root'));

registerServiceWorker();