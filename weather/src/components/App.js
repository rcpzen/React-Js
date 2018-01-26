import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SearchBar from '../containers/searc_bar';

class App extends Component {
  render() {
    return (
      <div className="App container">
       <SearchBar/>
      </div>
    );
  }
}

export default App;
