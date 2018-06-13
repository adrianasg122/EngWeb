import React, { Component } from 'react';

class PerfilList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1  ">
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-6">
                            <b>Primeiro Nome:</b>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            {this.props.perfilFs.map(user => (<p> {user.pname} </p>))}
                        </div>
                    </div>
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-6">
                            <b>Ultimo Nome:</b>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            {this.props.perfilFs.map(user => (<p> {user.uname} </p>))}
                        </div>
                    </div>
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-6">
                            <b>Username:</b>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            {this.props.perfilFs.map(user => (<p> {user.username} </p>))}
                        </div>
                    </div>
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-6">
                            <b>Email:</b>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            {this.props.perfilFs.map(user => (<p> {user.email} </p>))}
                        </div>
                    </div>
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-6">
                            <b>Telemóvel:</b>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            {this.props.perfilFs.map(user => (<p> {user.contact} </p>))}
                        </div>
                    </div>
                </div>
                <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2 w3-margin-top">
                    <div className="perfil row w3-border-bottom">
                        <div className="col-sm-6 col-md-8">
                            <b>Saldo:</b>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            {this.props.perfilFs.map(user => (<p> {user.saldo} </p>))}
                        </div>
                    </div>
                    <div className="col-xs-offset-1 col-xs-12 w3-padding-16">
                        <div className="col-sm-6 col-md-8">
                            <b>Carregar conta</b>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <i className="paypal fa fa-paypal w3-button w3-hover-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PerfilList;