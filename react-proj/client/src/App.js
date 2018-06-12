import React, { Component } from 'react';


class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className="App">
                <header class="w3-container w3-flat-wet-asphalt">
                    <div class="row">
                        <div class="col-md-10 col-xs-12">
                            <h2 class="title w3-margin w3-jumbo">ESS-TradingPlat</h2>
                        </div>
                        <div class="col-md-2">
                            <img class="w3-hide-small w3-hide-medium fundo" src="../public/fundo.png" width="150" height="150">
                            </img>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;