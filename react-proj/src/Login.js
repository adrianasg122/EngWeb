import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, browserHistory, StaticRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import Registo from './Registo.js';





class Login extends Component {
    state = {
        data: {
            username: '',
            password: '',
        },
        logged: false,
        errors: {},
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

    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    onSubmit = () => {
        const errors = this.validateData(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }
    validateData = (data) => {
        const errors = {};
        if (!data.username) errors.username = "Can't be blank";
        if (!data.password) errors.password = "Can't be blank";
        /**
         * TODO:
         * Validate Existence of User
        */
        return errors;
    }

    inlineError = ({ text }) => <div className="w3-container w3-center "><span style={{ color: "#ae5856" }}>{text}</span></div>

    render() {
        const { data, errors } = this.state
        return (
            <div className="Login">
                <div className="w3-container w3-padding-16">
                    <form onSubmit={this.handleSignIn.bind(this)}>
                        <div className="w3-container w3-center w3-padding-32">
                            <p className="input_desc"> Username </p>
                            <input className="input" type="text" name="username" id="username" value={data.username} onChange={this.onChange} />
                            <br />
                            {errors.username && <this.inlineError text={errors.username} />}
                        </div>
                        <div className="w3-container w3-center ">
                            <p className="input_desc"> Password </p>
                            <input className="input" type="password" name="password" id="password" value={data.password} onChange={this.onChange} />
                            <br />
                            {errors.password && <this.inlineError text={errors.password} />}
                        </div>
                        <div className="row w3-padding-32">
                            <div className="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                                <a className="botao" href="/Registo">Registar</a>
                            </div>
                            <div className="col-md-1 col-xs-2">
                                <a className="botao" onClick={this.onSubmit} >Entrar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;

