import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Home from './Component/Home';

class App extends Component {
state= {
  bookList: [],
}
loadList() {
  BooksAPI.getAll().then((books)=> this.setState({bookList: books}));
}
componentDidMount(){
  this.loadList();
}

  render(){
    return(
      <div>
        <Home
         books={this.state.bookList }
         />
      </div>
    )
  }
}

export default App;
