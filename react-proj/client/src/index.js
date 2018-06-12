import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Perfil from './Perfil.js';
import Portfolio from './Portfolio.js';
import Historico from './Historico.js';
import Login from './Login.js';
import AbrirContrato from './AbrirContrato.js';
import FecharContrato from './FecharContrato.js';
import Registo from './Registo.js';



class Index extends Component {

    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Registo" component={Registo} />
                    <Route path="/Perfil" component={Perfil} />
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