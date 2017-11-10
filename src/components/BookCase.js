import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookList from './BookList'

class BookCase extends Component {

    filterShelfBooks() {

        if(this.props.books.length > 0 ) {

            return this.props.books.filter((book) => book.shelf === this.props.filter)
        }

        return null;
    }

    render() {

        let books = this.filterShelfBooks();

        return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <BookList books={books} />
                    </li>
                </ol>
            </div>
        </div>
        )
    }
}

export default BookCase
