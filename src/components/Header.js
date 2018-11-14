import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {home} from 'react-icons-kit/fa/home';

const StyledHeader = styled.div `
    width: 100%;
    padding: 0.25em 0em;
`;

const Title = styled.div `
    text-align: center;
    font-size: 3em;
    font-weight: bold;
`;

const NavList = styled.ul `
    list-style: none;
    padding: 0em;
    margin: 0em;
    overflow: hidden;
    background-color: #f3f3f3;
`;

const NavItem = styled.li `
    display: inline;
    float: left;
`;

const RightItem = styled.li `
    display: inline;
    float: right;
`;

const StyledLink = styled(Link)`
    display: block;
    color: #666;
    font-size: 1em;
    text-align: center;
    padding: 0.8em 1em;
    text-decoration: none;

    &:hover {
        background-color: #ddd;
    }
`;

const itemList = [
    {
        content: (
        <Icon size={18}
            style={{color: '#666'}}
            icon={home}/>
        ),
        url: "/",
    }, {
        content: "학생 연도별 실적",
        url: "/report/annual",
    }, {
        content: "참가 학생 명단",
        url: "/report/particapants",
    },
];

class Header extends Component {
    render() {

        return (
            <StyledHeader>
                <Title>영진 돌보미 서비스</Title>
                <NavList>
                    {itemList.map((item, key) => {
                        return (
                            <NavItem key={key}>
                                <StyledLink to={item.url}>{item.content}</StyledLink>
                            </NavItem>
                        );
                    })}
                    <RightItem>
                        <StyledLink to="/register">회원가입</StyledLink>
                    </RightItem>
                    <RightItem>
                        <StyledLink to="/login">로그인</StyledLink>
                    </RightItem>
                </NavList>
            </StyledHeader>
        );
    }
}

export default Header;