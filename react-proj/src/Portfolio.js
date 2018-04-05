import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    return (
      <div className="Portfolio">  
        <div class="w3-container w3-center  w3-padding-16">
          <p>   PORTFOLIO {this.props.i} </p>
        <Link to="/App"><button>Back</button></Link>
        </div>
      </div>
    );
  }
}


export default Portfolio;
