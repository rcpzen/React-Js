import React, { Component } from 'react';
import '../App.css';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
class App extends Component {
  render() {
    return (
      <div className="row">
       <BookList/>
       <BookDetail/>
      </div>
    );
  }
}

export default App;
