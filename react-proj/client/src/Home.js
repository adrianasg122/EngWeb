import React, { Component } from 'react';
import HomeList from './components/HomeList';


class Home extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('/ESS/coins')
            .then(res => res.json())
            .then(data => this.setState({ data: data }));
    }

    openContrato(id) {
        if (localStorage.getItem('user')!==null && localStorage.getItem('user')!==undefined) {
            localStorage.setItem("abrirC", id);
            window.location.replace("/AbrirContrato");
        }else {
            localStorage.removeItem("abrirC");
        }
    }


    openTab(name) {
        var i, x, tablinks;
        console.log(this.state.data)
        x = document.getElementsByClassName("tabcontent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("w3-red", "");
        }
        document.getElementById(name.toString()).style.display = "block";
        switch (name.toString()) {
            case "Comm":
                document.getElementById("bComm").className += " w3-red";
                break;
            case "Acao":
                document.getElementById("bAcao").className += " w3-red";
                break;
            default:
                break;
        }
    }

    render() {
        window.onload = function() {
            this.document.getElementById("Comm").style.display = "block";
        }
        document.getElementById("homeNavBar").className = document.getElementById("homeNavBar").className.concat(" w3-white");
        return (
            <div className="w3-container row">
                <div id="mySidebar" className="w3-container sidebar w3-collapse w3-bar-block w3-light-grey w3-card col-xs-2">
                    <a className="w3-bar-item w3-button w3-red tablink " id="bComm" onClick={this.openTab.bind(this, 'Comm')}>Commodities</a>
                    <a className="w3-bar-item w3-button tablink" id="bAcao" onClick={this.openTab.bind(this, 'Acao')}>Ações</a>
                </div>
                <div className="w3-container col-xs-8 col-md-9">
                    <div id="Comm" className="tabcontent w3-container">
                        <h2 id="ComodAcao" className="titulo w3-padding-32"> Commodities</h2>
                        <HomeList homeFs={this.state.data} onClick={(id) => this.openContrato(id)} />
                    </div>
                    <div id="Acao" className="tabcontent w3-container">
                        <h2 id="ComodAcao" className="titulo w3-padding-32"> Ações</h2>
                        <HomeList homeFs={this.state.data} onClick={(id) => this.openContrato(id)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
