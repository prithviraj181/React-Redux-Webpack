import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div>

        <h1>Click on the following books to change the state </h1>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
