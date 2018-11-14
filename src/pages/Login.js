import React, {Component} from "react";
import styled from 'styled-components';

const LoginContainer = styled.div `
    margin: 1em auto;
    width: 70em;

    form {
        padding: 0 10%;
    }
    legend {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
    input {
        border-width: 1px;
        border: none;
        border-bottom: solid;
        border-color: grey;
        
        width: 100%;
        font-size: 1.5em;
        margin: .2em 0;
    }
    #login-btn {
        border-style: none;
        border-width: 0;
    }
    #login-btn:hover {
        background-color: pink;
    }
    #login-btn:active {
        background-color: blue;
    }
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        console.dir(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();

        alert("wow");
        // [1] Collecting form-data. [2] Match with request format. [3] Request login.
        // [4] Handle login response. [4-1] Success. [4-1-1] Change displaying component
        // to login success component. [4-1-2] Done. [4-2] Failure. [4-2-1] Show alert
        // message. [4-2-2] Done.
    }

    render() {
        return (
            <LoginContainer>
                <form onSubmit={this.handleSubmit}>
                    <legend>로그인</legend>
                    <input
                        id="user-id"
                        className="input-text"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="아이디를 입력해주세요."/>
                    <br/>
                    <input
                        id="user-pw"
                        className="input-text"
                        type="password"
                        onChange={this.handleChange}
                        placeholder="비밀번호를 입력해주세요."/>
                    <br/>
                    <input id="login-btn" type="submit" value="로그인"/>
                </form>
            </LoginContainer>
        );
    }
}

export default Login;