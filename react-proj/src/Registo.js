import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, browserHistory, StaticRouter } from 'react-router';
import Portfolio from './Portfolio';




class Registo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="Registo">
                <div class="w3-container w3-center w3-padding-16">
                    <form>
                        <div class="w3-container w3-center w3-padding-16" >
                            <p class="input_desc"> Nome Completo </p>
                            <input class="input" type="text" ref="nome" />
                        </div>
                        <div class="w3-container w3-center" >
                            <p class="input_desc"> Username </p>
                            <input class="input" type="text" ref="username" />
                        </div>
                        <div class="w3-container w3-center">
                            <div class="w3-padding-16">
                                <p class="input_desc"> Password </p>
                                <input class="input" type="password" ref="password" />
                            </div>
                            <div>
                                <p class="input_desc"> Confirmar Password </p>
                                <input class="input"type="password" ref="password-conf" />
                            </div>
                        </div>
                        <div class="row w3-center w3-padding-32 w3-padding-large">
                            <div class="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                               <a className="botao" href="/">Voltar</a>
                            </div>
                            <div class="col-md-1 col-xs-2">
                            <a className="botao" href="/">Registar</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}


export default Registo;