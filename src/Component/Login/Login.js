import React, { Component } from 'react';
import './Login.css'
import { Link } from "react-router-dom"
import Axios from 'axios';



class Login extends Component {
    state={
        id:"",
        password:""
    }
    handleChange = (e) => {
        let id = e.target.id
        if (id === "Password") {
            this.setState({
                password: e.target.value
            })
        }
        else if (id === "ID") {
            this.setState({
                id: e.target.value
            })
        }
    }
    handlerClick = () => {
        Axios.post('https://cors-anywhere.herokuapp.com/http://112.160.47.160:3000/api/login',
            {
                _id:this.state.id,
                password:this.state.password
            }).then(response => {
                console.log(response.data.sucess)
            })
            .catch(error => { console.log('failed', error) })
    }
    render() {
        return (
            <div className="container __Center">
                <div className="__LoginT">
                    <div className="__Selection">
                        <label className="col-md-3">아이디</label>
                        <input className="col-md-9" id="ID" defaultValue='ID' type="string" onChange={this.handleChange}></input>
                    </div>
                    <div className="__Selection">
                        <label className="col-md-3">비밀번호</label>
                        <input className="col-md-9" id="Password" defaultValue='0000' type="password"  onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="row __LoginT">
                    <div className="__Selection col-md-6 container">
                        <Link className="btn btn-primary __Link" onClick={this.handlerClick}>로그인</Link>
                    </div>
                    <div className="__Selection col-md-6 container">
                        <Link className="btn btn-primary __Link" to="/regist">회원가입</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
