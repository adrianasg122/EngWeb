import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect , browserHistory , StaticRouter } from 'react-router';
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

    <div class="w3-container w3-center  w3-padding-8">        
      <form> 
        <div class="w3-container w3-center w3-padding-8" >
            <p> Nome Completo </p>
            <input type="text" ref="nome"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8" >
            <p> Username </p>
            <input type="text" ref="username"/> 
        </div>
        <div class="w3-container w3-center w3-padding-8">
                <p> Password </p>
                <input type="password" ref="password"/>
                <p> Confirmar Password </p>
                <input type="password" ref="password-conf"/>
        </div>
        <div class="w3-container w3-padding-16 w3-padding-large">
            <Link to="/App"><button>Voltar</button></Link>
            <Link to="/App"><button>Confirmar</button></Link>
        </div>
    </form>
    </div>
      
</div>
    );
  }
}


export default Registo;