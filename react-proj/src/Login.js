import React, { Component } from 'react';
import styles from './w3.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
      }


    validateLogin() {
        console.log(this.state.username, this.state.pwd) ;
        if(this.state.username!=='' && this.state.password!=='')
           return(<Link to="/App" />) ; 
        else ; 
    }

    handleUsername(usr){
        this.setState({username: usr});
      };

    handlePassword(pwd){
        this.setState({password: pwd});
      };

      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log(this.state.username, this.state.pwd) ;
        return(<Link to="/App" />) ;
     }
    

  render() {
    return (
<div className="Login">  

    <div class="w3-container w3-center  w3-padding-16">        
      <form> 
        <div class="w3-container w3-center w3-padding-16" >
            <p> Username </p>
            <input type="text" value={this.state.username} onChange={e => this.handleChange(e)}/> 
        </div>
        <div class="w3-container w3-center w3-padding-16">
            <p> Password </p>
            <input type="text"  value={this.state.password} onChange={e => this.handleChange(e)}/>
        </div>
        <div class="w3-container w3-center w3-padding-4">
        <button onClick={(e) => this.onSubmit(e)}>Login</button>
        </div>
    </form>
    </div>
      
</div>
    );
  }
}


export default Login;