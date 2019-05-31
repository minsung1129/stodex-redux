import React, { Component } from 'react';
import './Balance.scss'


class Balance extends Component {
    render() {
        return (
            <div className="__Balance">
                <table className="table table-dark __Table">
                    <thead>
                        <tr className="row">
                            <th className="col-md-3">심볼</th>
                            <th className="col-md-3">합계</th>
                            <th className="col-md-3">사용가능</th>
                            <th className="col-md-3">주문중</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((res, i) =>
                            <Balancelist symbol={res.symbol} sum={res.sum} liquid={res.liquid} ordered={res.ordered} key={i}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Balancelist extends Component {
    render() {
        return (
            <tr className="row">
                <td className="col-md-3">{this.props.symbol}</td>
                <td className="col-md-3">{this.props.sum}</td>
                <td className="col-md-3">{this.props.liquid}</td>
                <td className="col-md-3">{this.props.ordered}</td>
            </tr>
        )
    }
}

export default Balance; 