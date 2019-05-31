import React, { Component } from 'react';
import Buttons from './Buttons/Buttons.js';
import Balance from './Balance/Balance.js';
import History from './History/History.js';
import './Account.css'
import Axios from 'axios';

class Account extends Component {

    state = {
        account: "bbang",
        nav: "",
        balance: 0,
        data: []
    };


    handlerClickE = (e) => {
        let name = e.target.name;
        this.setState({ ...this.state, nav: name })
    }

    render() {
        return (
            <div className="App">
                <div className="__Accountinfo __Tablerow">
                    <h5>{this.state.account}님 환영합니다!</h5>
                    <h5>{this.state.balance} KRW</h5>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Buttons handler={this.handlerClickE} />
                    </nav>
                    <div>
                        <div className="Main">
                            {this.state.nav === "balance" ? <Balance account={this.state.account} data={this.state.data} /> : this.state.nav === "history" ? <History account={this.state.account} />
                                : <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        let url = 'https://cors-anywhere.herokuapp.com/http://112.160.47.160:3000/api/accounts/'+this.state.account+'/tokens';
        Axios(url)
        .then(res=>{
            this.setState({...this.state,data:res.data.tokens})
            console.log(res)
            for(let i = 0; i < res.data.tokens.length; i++) {
                if(res.data.tokens[i].symbol === "KRW"){
                    this.setState({...this.state,balance:res.data.tokens[i].sum})
                    debugger
                    break;
                }
            }
        })
    }
}

export default Account;
