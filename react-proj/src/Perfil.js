import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    return (
  <div className="Perfil">  
    <div class="w3-container w3-center  w3-padding-16">
      <p>   PERFIL {this.props.i} </p>
        <Link to="/App"><button>Back</button></Link>
      </div>
    </div>
    );
  }
}


export default Perfil;

