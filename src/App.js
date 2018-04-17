import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import path from 'path';

import * as BooksAPI from './BooksAPI';
import Home from './Component/Home';

class App extends Component {
  state = {
    bookList: [],
  }
  loadList() {
    BooksAPI.getAll().then((books) => this.setState({ bookList: books }));
  }
  componentDidMount() {
    this.loadList();
  }

  handleBookStatusUpdate(book, shelf) {
    // Function to be passed down to Books.js to the select onChange event
    // Takes book and shelf and makes request to the server
    // If request is sucessfull it refreshes the book list in our application with new data
    BooksAPI.update(book, shelf).then((res) => res && this.loadList());

  }
  render() {
    return (
      <div className='app'>
      {/* Search Module */ }

      {/* Book Details Route */}
      <Route
      path='/details/:bookId'
      component={loadableBookDetails}
      />

      {/* Home page Route */}
      <Route
        path ='/'
        exact={ true }
        render={ ()=> (
            <Home
              handleBookStatusUpdate={this.handleBookStatusUpdate}
              books={this.state.bookList}
            />
        ) }
      />
      </div>
    );
  }
}

export default App;
