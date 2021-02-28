import React, { Component } from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';
import UsersComponent from './UsersComponent';

class App extends Component {

  constructor () {
      super()

      this.state = {
          usersData: [],
          error: null
      }
  }

  componentDidMount() {
      axios
          .get('http://localhost:3000/api/users')
          .then(res => res.data)
          .then(data => this.setState({ usersData: data }))
          .catch(err => this.setState({ error: err }));
  }

  render () {
      return (
        <>
          <UsersComponent usersData={this.state.usersData}/>
          {this.state.error && <p>Something went wrong</p>}
        </>
      )
  } 
}

export default App;
