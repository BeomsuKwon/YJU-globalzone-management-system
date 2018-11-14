import React, {Component} from 'react';
import styled from 'styled-components';

const StyeldFooter = styled.div `
    padding: 1rem 0em;
    background-color: #51585e;
    text-align: center;
    font-weight: bold;
    font-size: 0.8em;
    color: #dcddde;
`;

class Footer extends Component {
    render() {
        return (
            <StyeldFooter>
                41527 대구광역시 북구 복현로 35 (복현2동 218) 영진전문대학교 국제교류원 Tel. 053)940-5114<br/>
                COPYRIGHT© YEUNGJIN UNIVERSITY. All RIGHTS RESERVED.
            </StyeldFooter>
        );
    }
}

export default Footer;