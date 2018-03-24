import React, { Component } from 'react';
import styles from './w3.css';
import { Link } from 'react-router-dom';



class Teste extends Component {

    constructor(props) {
        super(props);
        this.state = {
            i:this.props.i
        }
      }

  render() {
    return (
      <div className="Teste">  
      <div class="w3-container w3-center  w3-padding-16">
      <p>Last value {this.state.i} </p>
        <Link to="/"><button>Back</button></Link>
      </div>
      </div>
    );
  }
}


export default Teste;
