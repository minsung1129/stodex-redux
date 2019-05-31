import React, { Component } from 'react';
import './Trade.css'
import Axios from 'axios'
class Trade extends Component {
    state = {
        sell_price: "0",
        sell_amount: "0",
        buy_price: "0",
        buy_amount: "0"
    }

    handleChange = (e) => {
        let id = e.target.id
        if (id === "buy_price") {
            this.setState({
                buy_price: e.target.value
            })
        }
        else if (id === "buy_amount") {
            this.setState({
                buy_amount: e.target.value
            })
        }
        else if (id === "sell_price") {
            this.setState({
                sell_price: e.target.value
            })
        }
        else if (id === "sell_amount") {
            this.setState({
                sell_amount: e.target.value
            })
        }
    }

    handleClick = (e) => {
        let id = e.target.name
        if (id === "sale") {
            Axios.put('https://cors-anywhere.herokuapp.com/http://112.160.47.160:3000/api/sale-orders',
                {
                        owner : 'bbang', 
                        amount : this.state.sell_amount, 
                        symbol : this.props.symbol, 
                        price : this.state.sell_price
                })
                .then(response => { alert("매도 요청이 정상적으로 요청되었습니다.") })
                .catch(error => { console.log('failed', error) })
        }
        else{
            Axios.put('https://cors-anywhere.herokuapp.com/http://112.160.47.160:3000/api/purchase-orders',
                {
                        owner : 'bbang', 
                        amount : this.state.buy_amount, 
                        symbol : this.props.symbol, 
                        price : this.state.buy_price
                })
                .then(response => { alert("매수 요청이 정상적으로 요청되었습니다.") })
                .catch(error => { console.log('failed', error) })
        }
    }

    render() {
        return (
            <div className="__TradeContainer row">
                <div className="__TradeL">
                    <div className="__Selection">
                        <label>가격</label>
                        <input id="buy_price" defaultValue='0' onChange={this.handleChange} type="number" max={5} />
                    </div>
                    <div className="__Selection">
                        <label>수량</label>
                        <input id="buy_amount" defaultValue='0' onChange={this.handleChange} type="number"></input>
                    </div>
                    <div className="__Selection">
                        <label>합계</label>
                        <label>{this.state.buy_amount * this.state.buy_price}</label>
                    </div>
                    <div className="__Selection __Button">
                        <button className="btn btn-success" name="purchase" onClick={this.handleClick}>매수</button>
                    </div>
                </div>
                <div className="__TradeL">
                    <div className="__Selection">
                        <label>가격</label>
                        <input id="sell_price" defaultValue='0' onChange={this.handleChange} type="number"></input>
                    </div>
                    <div className="__Selection">
                        <label>수량</label>
                        <input id="sell_amount" defaultValue='0' onChange={this.handleChange} type="number"></input>
                    </div>
                    <div className="__Selection">
                        <label>합계</label>
                        <label>{this.state.sell_amount * this.state.sell_price}</label>
                    </div>
                    <div className="__Selection __Button">
                        <button className="btn btn-danger" name="sale" onClick={this.handleClick}>매도</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trade;
