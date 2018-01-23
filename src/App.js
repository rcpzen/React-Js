import React, { Component } from 'react';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

class App extends Component {
  render() {

    return (
     <div className="container-fluid h-100"> 
      <Header/>
      <Main/>
    </div>
    )
  }

}


export default App
