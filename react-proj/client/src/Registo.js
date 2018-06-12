import React, { Component } from 'react';


class Registo extends Component {

    state = {
        data: {
            pnome:'',
            unome:'',
            username: '',
            plafond: null,
            contacto: null,
            password: '',
        },
        logged: false,
        errors: {},
        users: [],
        response:''
    }

    componentDidMount() {
        fetch('/ESS/users')
          .then(res => res.json())
          .then(users => { this.setState({ users: users }), console.log(users)});
      }

      postApi() {
        fetch('/ESS/post',{
            method: 'POST',
            body: JSON.stringify({
                pnome:this.state.data.unome,
                unome:this.state.data.pnome,
                username: this.state.data.username,
                plafond: this.state.data.plafond,
                contacto: this.state.data.contacto,
                password: this.state.data.password,
            }),
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
            return response.json()
          }).then(function(body){
            console.log(body);
          });
      };


      onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    onSubmit = () => {
        const errors = this.validateData(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            /**
             * TODO:
             * Login
            */
           // POST
           this.postApi();
           //window.location.replace("/");
        }
    }
    validateData = (data) => {
        const errors = {};
        var i ; 
        i=0 ; 
        var x
        if (!data.pname) errors.pname = "Can't be blank";
        if (!data.uname) errors.uname = "Can't be blank";
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
       for (x in this.state.users) {
            if (this.state.users[x].username === data.username){
                errors.username= "Username already registed";
                break;
            }
            else if (data.password !== data.password2){
                errors.password= "Passwords don't match";
                errors.password2= "Passwords don't match";
            }
            else 
                i++ ; 
       }
        return errors;
    }

    inlineError = ({ text }) => <div className="w3-container w3-center "><span style={{ color: "#ae5856" }}>{text}</span></div>


/*
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
                            <div className="w3-center">
                                <a className="botao" href="/">Voltar</a>
                                <a className="botao" onClick={this.handleSignIn.bind(this)}>Registar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
*/
render() {
    const { data, errors } = this.state
    return (
        <div className="Login">
            <div className="w3-container w3-padding-8">
                <form>
                    <div className="w3-container w3-center w3-padding-8">
                        <p className="input_desc"> Primeiro Nome </p>
                        <input className="input" type="text" name="pname" id="pname" value={data.pname} onChange={this.onChange} />
                        <br />
                        {errors.pname && <this.inlineError text={errors.pname} />}
                    </div>
                    <div className="w3-container w3-center w3-padding-8">
                        <p className="input_desc"> Ultimo Nome </p>
                        <input className="input" type="text" name="uname" id="uname" value={data.uname} onChange={this.onChange} />
                        <br />
                        {errors.uname && <this.inlineError text={errors.uname} />}
                    </div>
                    <div className="w3-container w3-center w3-padding-8">
                        <p className="input_desc"> Username </p>
                        <input className="input" type="text" name="username" id="username" value={data.username} onChange={this.onChange} />
                        <br />
                        {errors.username && <this.inlineError text={errors.username} />}
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