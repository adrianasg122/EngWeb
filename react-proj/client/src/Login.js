import React, { Component } from 'react';


class Login extends Component {
    state = {
        data: {
            username: '',
            password: '',
        },
        logged: 0,
        errors: {},
    }



    onChangeU = e => this.setState({ data: { ...this.state.data, username: e.target.value } })
    onChangeP = e => this.setState({ data: { ...this.state.data, password: e.target.value } })

    onSubmit = () => {
        const errors = this.validateData(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            fetch('/ESS/login?username=' + this.state.data.username + '&password=' + this.state.data.password)
                .then(res => res.json())
                .then(res => {
                    var log = res[0].exists;
                    if (log === 1) {
                        localStorage.setItem("user", this.state.data.username);
                        this.setState({ logged: log });
                        window.location.replace("/");
                    }
                });
        }
    }
    validateData = (data) => {
        const errors = {};
        if (!data.username) errors.username = "Can't be blank";
        if (!data.password) errors.password = "Can't be blank";

        return errors;
    }

    inlineError = ({ text }) => <div className="w3-container w3-center "><span style={{ color: "#ae5856" }}>{text}</span></div>

    render() {
        const { data, errors } = this.state
        return (
            <div className="Login">
                <div className="w3-container w3-padding-16">
                    <form>
                        <div className="w3-container w3-center w3-padding-32">
                            <p className="input_desc"> Username </p>
                            <input className="input" type="text" name="username" id="username" value={data.username} onChange={this.onChangeU} />
                            <br />
                            {errors.username && <this.inlineError text={errors.username} />}
                        </div>
                        <div className="w3-container w3-center ">
                            <p className="input_desc"> Password </p>
                            <input className="input" type="password" name="password" id="password" value={data.password} onChange={this.onChangeP} />
                            <br />
                            {errors.password && <this.inlineError text={errors.password} />}
                        </div>
                        <div className="row w3-padding-32">
                            <div className="w3-center">
                                <a className="botao" href="/Registo">Registar</a>
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

