import React, { Component } from 'react';
import './Regist.css'
import Axios from 'axios';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

class Login extends Component {
    state = {
        id: "id",
        pwd: "0000",
        pwdc: "0000"
    }
    handleChange = (e) => {
        let id = e.target.id
        if (id === "Password") {
            this.setState({
                pwd: e.target.value
            })
        }
        else if (id === "Passwordc") {
            this.setState({
                pwdc: e.target.value
            })
        }
        else if (id === "ID") {
            this.setState({
                id: e.target.value
            })
        }
    }

    handlerClick = () => {
        let good = false;
        if (this.state.pwd !== this.state.pwdc) {
            alert("비밀번호가 일치 하지 않습니다.")
            good = true
        }
        if (!good) {
            Axios.post('https://cors-anywhere.herokuapp.com/http://112.160.47.160:3000/api/accounts',
                {
                    _id: this.state.id,
                    password: this.state.pwd
                })
                .then(response => {
                    alert("회원가입이 완료되었습니다.\n 개인키는 :" + response.data.private_key + '입니다.');
                   
                })
                .catch(error => { console.log('failed', error) })
        }
    }

    render() {
        return (
            <div className="container __Center">
                <div className="__LoginT">
                    <div className="__Selection">
                        <label className="col-md-3">이름</label>
                        <input className="col-md-9" type="string" maxlength="12" id="name" defaultValue='이름'></input>
                    </div>
                    <div className="__Selection">
                        <label className="col-md-3">이메일</label>
                        <input className="col-md-9" type="string" maxlength="12" id="email" defaultValue='이메일'></input>
                    </div>
                    <div className="__Selection">
                        <label className="col-md-3">아이디</label>
                        <input className="col-md-9" id="ID" defaultValue='ID' type="string" onChange={this.handleChange} maxlength="12"></input>
                    </div>
                    <div className="__Selection">
                        <label className="col-md-3">비밀번호</label>
                        <input className="col-md-9" id="Password" defaultValue='0000' type="password" onChange={this.handleChange} maxlength="12"></input>
                    </div>
                    <div className="__Selection">
                        <label className="col-md-3">비밀번호 확인</label>
                        <input className="col-md-9" id="Passwordc" defaultValue='0000' type="password" onChange={this.handleChange} maxlength="12"></input>
                    </div>

                </div>
                <div className="__Selection __Button">
                    <button className="btn btn-danger Button__regist" onClick={this.handlerClick} >회원가입</button>
                </div>
            </div>
        );
    }
}

export default Login;
