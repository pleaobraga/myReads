import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookListShelf from './BookListShelf'
import { Link } from 'react-router-dom'


class BookCase extends Component {

  constructor() {
    super();
    this.state = { books: [] };    
  }

  getAllShelfBooks() {
    BooksAPI.getAll()
    .then((books) => this.setState({books}))
    .catch((e) => console.log("error getting the books"));
  }

  updateShelf(book, shelf) {
    this.setState({books: this.state.books});

    BooksAPI.update(book, shelf)
    .catch((e) => console.log("error update the book shelf")) 
  }

  componentDidMount() {
    this.getAllShelfBooks();
  }

  render() {

    let { books } = this.state;

    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookListShelf  title="Currently Reading" 
                                books={books} 
                                filter="currentlyReading" 
                                updateShelf={this.updateShelf.bind(this)}  />
                <BookListShelf  title="Want to Read" 
                                books={books} 
                                filter="wantToRead" 
                                updateShelf={this.updateShelf.bind(this)} />
                <BookListShelf  title="Read" 
                                books={books} 
                                filter="read" 
                                updateShelf={this.updateShelf.bind(this)} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BookCase
