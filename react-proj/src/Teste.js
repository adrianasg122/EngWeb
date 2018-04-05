import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Teste extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:this.props.i
        }
      }

  render() {
    return (
    <div className="Teste">  
      <div class="w3-container w3-center  w3-padding-16">
        <p >Last value </p>
        <Link to="/"><button>Back</button></Link>
      </div>

      <div>
        <div class="w3-container">
  		  <table class="w3-table-all w3-border">
          	<tr>
        			<th>Ativo</th>
        			<th>Variação(%)</th>
        			<th>P.compra(€)</th>
              <th>P.venda(€)</th>
      		  </tr>
            <tr>
        			<th>AMZN</th>
        			<th>0.48</th>
        			<th>1510.76</th>
              <th>1507.86</th>
      		  </tr>
      	</table>
    	 </div>
      </div>
    </div>
    );
  }
}


export default Teste;
