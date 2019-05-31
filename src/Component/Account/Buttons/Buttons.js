import React, { Component } from 'react';
import './Buttons.css'
class Buttons extends Component {
    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <button className="btn btn-dark __Buttons" name="balance" onClick={this.props.handler}>잔고 </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-dark __Buttons" name="history" onClick={this.props.handler}>주문내역</button>
                </li>
            </ul>
        )
    }
}

export default Buttons;
