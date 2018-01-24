import React, { Component } from 'react';
import '../App.css';
import BookList from '../containers/book-list';
class App extends Component {
  render() {
    return (
      <div className="container">
       <BookList/>
      </div>
    );
  }
}

export default App;
