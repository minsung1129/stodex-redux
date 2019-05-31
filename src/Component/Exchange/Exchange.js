import React, { Component } from 'react';
import Chart from './Chart/Chart.js'
import List from "./List/List.js"
import Trade from "./Trade/Trade.js"
import './Exchange.scss'
import Axios from 'axios'
import TradeList from './TradeList/TradeList.js'

class Exchange extends Component {
	state = {
		data: [],
		symbol: "GOLD"
	};

	render() {
		return (
			<div className="row">
				<div className="Chart__Trade__list col-md-9">
					<div className="list__Chart row">
						<div className="__list col-4">
							<table className="__Table">
								<thead>
									<tr>
										<th className="col-md-3">토큰</th>
										<th className="col-md-3">가격</th>
										<th className="col-md-3">변화량</th>
										<th className="col-md-3">거래량</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data, i) => {
										return <List name={data.symbol} price={data.summary.last_price} percent={data.summary.percent} volume={data.summary.volume} key={data.pk} />
									})}
								</tbody>
							</table>
						</div>
						<div className="__Chart col-8">
							<Chart name={this.state.symbol} />
						</div>
					</div>
					<div className="My__Trade row">
						<div className="__My col-md-4">
						</div>
						<div className="__Trade col-md-8">
							<Trade symbol={this.state.symbol} />		
						</div>
					</div>
				</div>
				<div className="__TradeList col-md-3">
					<table className="__Table__List">
						<thead>
							<tr>
								<th className="col-md-4">가격</th>
								<th className="col-md-4">{this.state.symbol}</th>
								<th className="col-md-4">합계</th>
							</tr>
						</thead>
						<tbody>
							<TradeList type="buy"/>
						</tbody>
					</table>
					<table className="__Table__List">
						<thead>
							<tr>
								<th className="col-md-4">가격</th>
								<th className="col-md-4">{this.state.symbol}</th>
								<th className="col-md-4">합계</th>
							</tr>
						</thead>
						<tbody>
							<TradeList type="sell"/>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
	componentDidMount = () => {
		Axios('https://api.dexeos.io/v3/token')
			.then(response => {
				this.setState({ ...this.state, data: response.data });
			})
	}
}

export default Exchange;
