import React, { Component } from 'react';
import Axios from 'axios';
import './TradeList.css'
class List extends Component {
    state = {
        data: [],
        type: ""
    }

    render() {
        return (
                this.state.data.map(res=>{
                    return<TradeList price={res.per_eos} amount={res.amount} key={res.per_eos}/>})
        );
    }

    componentDidMount = () => {
        this.setState({...this.state,type:this.props.type})
        Axios('https://api.dexeos.io/v3/orderbook/everipediaiq::IQ?market=eos')
            .then(response => {
                let data = []
                response.data.map(res => {
                    if (res.type === this.state.type) {data.push(res)}
                    return ""
                })
                this.setState({ ...this.state, data:data})
            })
    }
}

class TradeList extends Component {
    render() {
        let volume = this.props.price * this.props.amount
        return (
            <tr className="__TableRow">
                <td className="col-md-4 __Number">{this.props.price.toFixed(4)}</td>
                <td className="col-md-4 __Number">{this.props.amount.toFixed(4)}</td>
                <td className="col-md-4 __Number">{volume.toFixed(4)}</td>
            </tr>
        )
    }
}

export default List;
