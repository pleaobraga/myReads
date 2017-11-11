import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookListSearch from './BookListSearch'
import { Link } from 'react-router-dom'

class Search extends Component {

    constructor() {
        super();
        this.state = { books: [], booksShelf: []};
    }
    
    updateShelf (book, shelf) {
        
        this.setState({books: this.state.books});

        BooksAPI.update(book, shelf)
        .catch((e) => console.log("error update the book shelf")) 
    }

    insertTypeShelf(book) {
        this.state.booksShelf.forEach((bookShelf) => {
            if(book.id === bookShelf.id)
                book.shelf = bookShelf.shelf; 
        });
    }


    bookSearch(query) {
        BooksAPI.search(query)
        .then((books) => {
            !(books === undefined || books.error) && books.map((book) => { this.insertTypeShelf(book); return book; });
            this.setState({books: (books === undefined || books.error) ? [] : books  });
        });
    }


    onInputChange(event) {
        let query = event.target.value;
        this.bookSearch(query)
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({booksShelf: (books !== undefined && !books.error) ? books : [] });
        });
    }

    render() {
        return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input  type="text" 
                                placeholder="Search by title or author" 
                                onChange={this.onInputChange.bind(this)} />
                    </div>
                </div>
                <BookListSearch books={this.state.books} 
                                updateShelf={this.updateShelf.bind(this)} />
            </div>
        </div>)   
    }
}

export default Search
