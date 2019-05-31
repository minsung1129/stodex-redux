import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav.js'
import Login from './Login/Login.js'
import Regist from './Regist/Regist.js'
import Account from './Account/Account.js'
import { Route, Link } from "react-router-dom"
import Exchange from './Exchange/Exchange.js';
import gql from 'apollo-boost'

class App extends Component {
	render() {
		// const Query = gql`{
		// 	isLoggedIn @client
		// }`;
		
		// const {data} = useQuery(Query)
		// console.log(data)

		return (
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Nav />
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="btn btn-dark" to="/login" >Login</Link>
						</li>
					</ul>
				</nav>
				<div className="Main">
					<Route path="/exchange" render={() => <Exchange />} />
					<Route path="/account" render={() => <Account />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/regist" render={() => <Regist />} />
				</div>
			</div>
		);
	}
}

export default App;
