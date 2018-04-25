import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Teste  from './Teste.js';
import Perfil  from './Perfil.js';
import Portfolio  from './Portfolio.js';
import Historico  from './Historico.js';
import Login  from './Login.js';
import AbrirContrato  from './AbrirContrato.js';
import FecharContrato  from './FecharContrato.js';
import Registo  from './Registo.js';



ReactDOM.render(
    <Router>
    <div>
        <Route exact path="/" component={Registo} />
        <Route exact path="/App" component={App} />
        <Route path="/Teste" component={Teste} />
        <Route path="/Perfil" component={Perfil} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Historico" component={Historico} />
        <Route path="/AbrirContrato" component={AbrirContrato} />
        <Route path="/FecharContrato" component={FecharContrato} />
    </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
