import React, {Component} from "react";
import styled from "styled-components";

const HomeTitle = styled.h1 `
    font-size: 1.5em;
`;

const HomeContainer = styled.div `
`;

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <HomeTitle>Home</HomeTitle>
            </HomeContainer>
        );
    }
}

export default Home;