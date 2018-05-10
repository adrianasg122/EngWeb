import React, { Component } from 'react';


class Registo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: ''
        }
      }

    handleSignIn(e) {
        e.preventDefault()
        console.log("Before " + this.state.username);
        console.log("Before " + this.state.password);
        this.setState({ nome: this.refs.pnome.value });
        this.setState({ username: this.refs.username.value });
        this.setState({ password: this.refs.password.value });
        console.log("After " + this.state.username);
        console.log("After " + this.state.password);
        if ((this.state.username !== '' && this.state.username !== '' && this.state.password !== '') && this.state.password === this.refs.passwordC.value) {
            console.log("ok");
            this.setState({ logged: true });
            // duvida aqui !!!!!!
            // browserHistory.push('/Portfolio');
            // React.render(Portfolio);
            window.location.replace("/");
        }
        else {
            console.log("not ok");
        }
    }



    render() {
        return (
            <div className="Registo">
                <div className="row w3-padding-32">
                    <form onSubmit={this.handleSignIn.bind(this)}>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc ">Primeiro Nome:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="pnome" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Último Nome:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="unome" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Username:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="username" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Contacto:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="contacto" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Plafond Inicial</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="plafond" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Password:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="password" />
                            </div>
                        </div>
                        <div className="row w3-padding-16">
                            <div className="col-sm-offset-4 col-sm-2 col-md-2">
                                <b className="input_desc">Confirmar password:</b>
                            </div>
                            <div className="col-sm-2 col-md-2">
                                <input className="input" type="text" ref="passwordC" />
                            </div>
                        </div>
                        <div className="row w3-padding-32">
                            <div className="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                                <a className="botao" href="/">Voltar</a>
                            </div>
                            <div className="col-md-1 col-xs-2">
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