import React, { Component } from 'react';


class Login extends Component {
    state = {
        data: {
            username: '',
            password: '',
        },
        logged: false,
        errors: {},
        users: [],
    }

    componentDidMount() {
        fetch('/ESS/users')
          .then(res => res.json())
          .then(users => { this.setState({ users: users }), console.log(users)});
      }

    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    onSubmit = () => {
        const errors = this.validateData(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            /**
             * TODO:
             * Login
            */
           window.location.replace("/");
        }
    }
    validateData = (data) => {
        const errors = {};
        var i ; 
        i=0 ; 
        var x
        if (!data.username) errors.username = "Can't be blank";
        if (!data.password) errors.password = "Can't be blank";    
        /**
         * TODO:
         * Validate Existence of User
        */
       for (x in this.state.users) {
            if(this.state.users[x].username === data.username && this.state.users[x].password === data.password)
                break;
            else if (this.state.users[x].username === data.username && this.state.users[x].password !== data.password)
                errors.password= "Wrong password";
            else 
                i++ ; 
       }
       if (i==this.state.users.length)
            errors.username = "User not found";
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

