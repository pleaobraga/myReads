import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'


class BooksApp extends Component {
  state = {
    books: []
  }

  getAllShelfBooks() {
    BooksAPI.getAll()
    .then((books) => {
        this.setState({books});
    })
    // .catch((e) => alert("error getting the books"))
      
  }

  updateShelf(book, shelf) {

    this.state.books.filter((stateBook) => {
      if(book.id == stateBook.id) {
        stateBook.shelf = shelf;
      }
    });

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
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
