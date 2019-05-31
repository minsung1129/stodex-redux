import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App.js';
import { BrowserRouter as Router } from "react-router-dom"
import client from './Component/Apollo/ApolloClient.js'
import { ApolloProvider } from 'react-apollo'
ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <App />
    </Router>
</ApolloProvider>, document.getElementById('root'));

 