import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookList from './BookList'
import { Link } from 'react-router-dom'


class BookCase extends Component {
  state = {
    books: []
  }

  getAllShelfBooks() {
    BooksAPI.getAll()
    .then((books) => {
        this.setState({books});
    })
    .catch((e) => alert("error getting the books"));
  }

  updateShelf(book, shelf) {
    this.setState({books: this.state.books});

    BooksAPI.update(book, shelf)
    .catch((e) => alert("error update the book shelf")) 
  }

  componentDidMount() {
    this.getAllShelfBooks();
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
              <BookList title="Currently Reading" books={this.state.books} filter="currentlyReading" updateShelf={  (book, shelf) => {this.updateShelf(book, shelf)}}  />
              <BookList title="Want to Read" books={this.state.books} filter="wantToRead"  updateShelf={  (book, shelf) => {this.updateShelf(book, shelf)}} />
              <BookList title="Read" books={this.state.books} filter="read" updateShelf={  (book, shelf) => {this.updateShelf(book, shelf)}} />
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
