import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Historico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    return (
    <div className="Historico">  
      <div class="w3-container w3-center  w3-padding-16">
        <p> HISTÓRICO {this.props.i} </p>
          <Link to="./"><button>Back</button></Link>
      </div>
    </div>
    );
  }
}

export default Historico;
