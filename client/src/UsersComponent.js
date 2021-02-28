import React, { Component } from 'react';
import { Table, Col, Row, Button, Space, Divider, Typography, Input } from 'antd';

export default class UsersComponent extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            displayedUserData: [],
            averageAge: null,
            enteredInputPhrase: '',
        }
    }    

    componentDidMount() {
        this.fetchUsersData();
        this.timer = null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.usersData !== this.props.usersData) {
          this.fetchUsersData();
        }
    }
    
    render() {
        return(
            <Row justify="center">
            <Divider />
            <Col span={8}>
                <Table dataSource={this.state.displayedUserData} columns={this.columns} pagination={false}/>    
                <Space style={{ marginBottom: 16 }}>
                    <Typography.Paragraph>Filter By name</Typography.Paragraph>
                    <Input value={this.state.enteredInputPhrase} 
                            onChange={(e) => this.handleInputChange(e)} 
                            onKeyDown={(e) => this.handleKeyDown(e)}/>
                    <Button onClick={this.getAverageUsersAge}> Get Average Age</Button>
                    <Button onClick={this.getAdminUsers}>Show Admins</Button>
                    <Button onClick={this.fetchUsersData}>Clear</Button>
                </Space>
                <Row>
                    {this.state.averageAge && <Typography.Title>Average age: {this.state.averageAge}</Typography.Title>}
                </Row>        
            </Col>
            </Row>
        )
    }

    handleInputChange = ({ target: {value} }) => {
        clearTimeout(this.timer);
        this.setState({ enteredInputPhrase: value });
        this.timer = setTimeout(() => this.filterUsersByName(value), 500);
    }

    filterUsersByName = (name) => {
        const { displayedUserData } = this.state;
        this.setState({ displayedUserData: displayedUserData.filter(user => user.name.includes(name)) }); 
    }

    handleKeyDown = ({ keyCode }) => {
        const { enteredInputPhrase } = this.state;
        if(keyCode === 13) {
            clearTimeout(this.timer);
            this.filterUsersByName(enteredInputPhrase);
        }
    }

    getAverageUsersAge = () => {
        const { displayedUserData } = this.state;
        this.setState({ averageAge: displayedUserData.reduce((acc, next) => acc += next.age, 0) / displayedUserData.length});
    }

    getAdminUsers = () => {
        const { displayedUserData } = this.state;
        this.setState({ displayedUserData: displayedUserData.filter(user => user.isAdmin) }); 
    }

    fetchUsersData = () => {
        this.setState({ displayedUserData: this.props.usersData });
    }

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Admin',
            dataIndex: 'isAdmin',
            key: 'isAdmin',
            render: isAdmin => isAdmin ? "Yes" : "No"
        }
    ]
}