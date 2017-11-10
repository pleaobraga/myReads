import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookList from './BookList'
import _ from 'lodash'
import { Link } from 'react-router-dom'


class Search extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    
    updateShelf (book, shelf) {
        
        this.setState({books: this.state.books});

        BooksAPI.update(book, shelf)
        .catch((e) => alert("error update the book shelf")) 
    }


    bookSearch(query) {
        BooksAPI.search(query)
        .then((books) => {
            if(books !== undefined && !books.error) {
                this.setState({books});                
            } else {
                this.setState({books : []});  
            }

        });
    }


    onInputChange(event) {
        let query = event.target.value;
        this.bookSearch(query)
    }

    render() {

        

        return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onInputChange.bind(this)} />
                    </div>
                </div>
                <BookList books={this.state.books} updateShelf={  (book, shelf) => {this.updateShelf(book, shelf)}} searchList={true} />
            </div>
        </div>
        )   
    }
}

export default Search
