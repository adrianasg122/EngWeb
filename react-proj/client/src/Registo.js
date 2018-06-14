import React, { Component } from 'react';


class Registo extends Component {

    state = {
        data: {
            pnome: '',
            unome: '',
            username: '',
            email: '',
            plafond: '',
            contacto: '',
            password: '',
            password2: ''
        },
        errors: {},
        response: ''
    }


    postApi() {
        console.log(this.state.data);
        fetch('/ESS/registar', {
            method: 'POST',
            body: JSON.stringify({
                pnome: this.state.data.pnome,
                unome: this.state.data.unome,
                username: this.state.data.username,
                email: this.state.data.email,
                plafond: this.state.data.plafond,
                contacto: this.state.data.contacto,
                password: this.state.data.password,
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function () {
                window.location.replace("/");
            })
            .then(res => this.setState({ response: res }));
    };


    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    onSubmit = () => {
        const errors = this.validateData(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.postApi();
            //window.location.replace("/");

        }
    }
    validateData = (data) => {
        const errors = {};
        if (!data.pnome) errors.pnome = "Can't be blank";
        if (!data.unome) errors.unome = "Can't be blank";
        if (!data.username) errors.username = "Can't be blank";
        if (!data.contacto) errors.contacto = "Can't be blank";
        if (!data.plafond) errors.plafond = "Can't be blank";
        if (isNaN(data.plafond)) errors.plafond = "Must be a valid number";
        if (isNaN(data.contacto)) errors.contacto = "Must be a valid number";
        if (!data.password) errors.password = "Can't be blank";
        if (!data.password2) errors.password2 = "Can't be blank";
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
                <div className="w3-container w3-padding-8">
                    <form>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Primeiro Nome </p>
                            <input className="input" type="text" name="pnome" id="pnome" value={data.pnome} onChange={this.onChange} />
                            <br />
                            {errors.pnome && <this.inlineError text={errors.pnome} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Ultimo Nome </p>
                            <input className="input" type="text" name="unome" id="unome" value={data.unome} onChange={this.onChange} />
                            <br />
                            {errors.unome && <this.inlineError text={errors.unome} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Username </p>
                            <input className="input" type="text" name="username" id="username" value={data.username} onChange={this.onChange} />
                            <br />
                            {errors.username && <this.inlineError text={errors.username} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Email </p>
                            <input className="input" type="text" name="email" id="email" value={data.email} onChange={this.onChange} />
                            <br />
                            {errors.email && <this.inlineError text={errors.email} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Contacto </p>
                            <input className="input" type="text" name="contacto" id="contacto" value={data.contacto} onChange={this.onChange} />
                            <br />
                            {errors.contacto && <this.inlineError text={errors.contacto} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Plafond Inicial </p>
                            <input className="input" type="text" name="plafond" id="plafond" value={data.plafond} onChange={this.onChange} />
                            <br />
                            {errors.plafond && <this.inlineError text={errors.plafond} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc"> Password </p>
                            <input className="input" type="password" name="password" id="password" value={data.password} onChange={this.onChange} />
                            <br />
                            {errors.password && <this.inlineError text={errors.password} />}
                        </div>
                        <div className="w3-container w3-center w3-padding-8">
                            <p className="input_desc">  Confirmar Password </p>
                            <input className="input" type="password" name="password2" id="password2" value={data.password2} onChange={this.onChange} />
                            <br />
                            {errors.password2 && <this.inlineError text={errors.password2} />}
                        </div>
                        <div className="row w3-padding-16">
                            <div className="w3-center">
                                <a className="botao" href="/">Voltar</a>
                                <a className="botao" onClick={this.onSubmit} >Registar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}


export default Registo;