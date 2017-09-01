import React, { Component } from 'react';

import CardHolder from './CardHolder.js';
import Search from './Search.js'
import api from '../utils/apiRequests.js';

import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'this is a test'
    }
  }

  componentDidMount() {
    api.test()
      .then( response => {
        console.log('response from api.test in Main.js', response);
      })
  }

  render() {
    return(
      <div className="Main">
        <div className="body">
          <Search/>
          <CardHolder/>

        </div>
      </div>

    );
  }
}

export default Main;
