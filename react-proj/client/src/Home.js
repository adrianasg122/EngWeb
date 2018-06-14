import React, { Component } from 'react';
import HomeList from './components/HomeList';


class Home extends Component {
    state = {
        data: [],
        user: [],
        portfolioL: [],
        investedValue: ''
    }

    loadData(data) {
        var portfolio, x;
        portfolio = [];
        for (x in data) {
            const newPort = {
                id: data[x].id,
                coin: data[x].idCoin,
                quantidade: data[x].quant,
                precoA: data[x].priceA,
                dataA: data[x].dataA,
                tipo: data[x].venda,
            };
            portfolio = portfolio.concat(newPort);
        }

        let invest = 0;
        var i;
        for (i in portfolio) {
            var valueTransaction = portfolio[i].quantidade;
            var unitsTransaction = portfolio[i].quantidade * 1.0 / portfolio[i].precoA;
            var buySell = portfolio[i].tipo;
            var currentValue = this.state.data.filter(coinH => coinH.id === portfolio[i].coin)[0].price;
            invest = invest + ((buySell === 0) ?
            (currentValue - valueTransaction) * unitsTransaction + valueTransaction * unitsTransaction :
            (valueTransaction - currentValue) * unitsTransaction + valueTransaction * unitsTransaction);
        }


        this.setState({
            portfolioL: portfolio,
            investedValue: invest
        });
    }

    resolveAfter1Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 1000);
        });
      }
      
      async backG() {
        while(true) {
            await this.resolveAfter1Seconds();
        fetch('/ESS/coins')
        .then(res => res.json())
        .then(data => this.setState({ data: data }));
        }
      }

    componentDidMount() {
        if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
            document.getElementById("mySidebar").className = document.getElementById("mySidebar").className.concat(" w3-hide");
            fetch('/ESS/coins')
            .then(res => res.json())
            .then(data => this.setState({ data: data }));
        }
        else {
            document.getElementById("mySidebar").className = document.getElementById("mySidebar").className.replace("w3-hide", "");
            fetch('/ESS/coins')
            .then(res => res.json())
            .then(data => this.setState({ data: data }));
            fetch('/ESS/user?username=' + localStorage.getItem("user"))
                .then(res => res.json())
                .then(res => this.setState({ user: res }))
            fetch('/ESS/contratos?username=' + localStorage.getItem("user"))
                .then(res => res.json())
                .then(res => this.loadData(res));
        }

          
        this.backG();
    }

    openContrato(id) {
        if (localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined) {
            localStorage.setItem("abrirC", id);
            window.location.replace("/AbrirContrato");
        } else {
            localStorage.removeItem("abrirC");
        }
    }


    

    render() {
        window.onload = function () {
            this.document.getElementById("Comm").style.display = "block";
        }
        document.getElementById("homeNavBar").className = document.getElementById("homeNavBar").className.concat(" w3-white");
        return (
            <div className="w3-container row">
                <div id="mySidebar" className="w3-container sidebar w3-collapse w3-bar-block w3-light-grey w3-card col-xs-11 col-md-2 ">
                    <div className="row w3-padding-16 ">
                        <div className="col-xs-6">
                            <b>Saldo Disponivel:</b>
                        </div>
                        <div className="col-xs-6">
                        { this.state.user.map(user => (<span> { Math.round(user.saldo * 1000) / 1000} $</span>))}
                        </div>
                    </div>
                    <div className="row w3-padding-16 ">
                        <div className="col-xs-6">
                            <b>Valor Investimentos:</b>
                        </div>
                        <div className="col-xs-6">
                        {Math.round(this.state.investedValue*1000) / 1000} $
                        </div>
                    </div>
                </div>
                <div className="w3-container col-xs-8 col-md-9">
                    <div id="Comm" className="tabcontent w3-container">
                        <h2 id="ComodAcao" className="titulo w3-padding-32"> Criptocurrencies </h2>
                        <HomeList homeFs={this.state.data} onClick={(id) => this.openContrato(id)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
