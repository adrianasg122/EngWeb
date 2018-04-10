import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid , Row , Col , Clearfix } from 'react-bootstrap';

class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.i
    }
  }

  render() {
    return (
      <div className="Perfil">
        <Grid>
          <Row>
            <Col xs={6}>
              <h1>O Meu Perfil</h1>
            </Col>
          </Row>
          <Row>
          <div id="data">
            <Col xs={12} sm={6}>
              <Row>
                <Col xs={6} sm={6}>
                  Primeiro Nome
                </Col>
                <Col xs={6} sm={6}>
                  Manuel
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  Ultimo Nome
                </Col>
                <Col xs={6} sm={6}>
                  Pereira
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  Username
                </Col>
                <Col xs={6} sm={6}>
                  manuel123
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  Email
                </Col>
                <Col xs={6} sm={6}>
                  manuel123@mail.com
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  Telemóvel
                </Col>
                <Col xs={6} sm={6}>
                  +351 909 090 901
                </Col>
              </Row>
            </Col>
          </div>
          <div id="money">
            <Col xs={12} sm={5} smOffset={1} className="w3-border w3-margin-top">
              <Row>
                <Col xs={6} sm={8}>
                  Saldo:
                </Col>
                <Col xs={6} sm={4}>
                  1000€
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={8}>
                  Total Investido:
                </Col>
                <Col xs={6} sm={4}>
                  2000€
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={8}>
                  Total de Ganho/Perda:
                </Col>
                <Col xs={6} sm={4}>
                  +134.5€
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={8}>
                  Equitity:
                </Col>
                <Col xs={6} sm={4}>
                  3134.5€
                </Col>
              </Row>
            </Col>
          </div>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Perfil;

