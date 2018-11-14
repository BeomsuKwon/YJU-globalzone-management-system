import React, {Component} from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const ParticapantContainer = styled.div `
    margin: 2em 0;
`;

const StyledReactTable = styled(ReactTable)`
    
`;

const DateContainer = styled.div `
`;

const DepartmentContainer = styled.div `
`;

class ParticapantReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '2018년 1월',
            dep: '컴퓨터정보계열',
        }
    }

    render() {
        const data = [
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
            {order: 1, id: 1401016, name: '권범수', date: '2018-11-13', place: '글로벌존', time: 2, minute: 40},
        ];
        
        const columns = [
            {
                Header: '순번',
                accessor: 'order' // String-based value accessors.
            }, {
                Header: '학번',
                accessor: 'id'
            }, {
                Header: '성명',
                accessor: 'name'
            }, {
                Header: '활동 일자',
                accessor: 'date'
            }, {
                Header: '활동 장소',
                accessor: 'place'
            }, {
                Header: '활동 횟수(회)',
                accessor: 'time'
            }, {
                Header: '활동 시간(분)',
                accessor: 'minute'
            }
        ];

        return (
            <ParticapantContainer>
                <DateContainer>
                    <span id="date-label">연도/월</span>
                    <span id="date-value">{this.state.date}</span>
                </DateContainer>
                <DepartmentContainer>
                    <span id="dep-label">계열/학과</span>
                    <span id="dep-value">{this.state.dep}</span>
                </DepartmentContainer>
                <StyledReactTable data={data} columns={columns}/>
            </ParticapantContainer>
        );
    }
}

export default ParticapantReport;