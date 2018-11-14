import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import styled from 'styled-components';

import {Header, Footer} from './components';
import {Home, Login, AnnualReport, ParticapantReport} from './pages';

const StyledSection = styled.div `
margin: 1em auto;
    padding: 0em 1em;
    width: 95%;

    border-style: solid;
    border-width: 0.02em;
    border-color: #888888;
    border-radius: 0.4em;

    box-shadow: 0.1em 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2), 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.24);
`;

const NotFound = styled.div `
    padding: 1em 0;

    font-size: 4em;
    text-align: center;
    color: #555;
`;

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Header}/>
                <StyledSection>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/report/annual" component={AnnualReport}/>
                        <Route exact path="/report/particapants" component={ParticapantReport}/>
                        <Route component={() => <NotFound>잘못된 접근입니다</NotFound>}/>
                    </Switch>
                </StyledSection>
                <Route path="/" component={Footer}/>
            </div>
        );
    }
}

export default App;
