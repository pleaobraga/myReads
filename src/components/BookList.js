import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class BookList extends Component {


    getBooks() {
        books = BooksAPI.search(shelf)
    }

    renderBooks() {
        return(
            books.foreach((book) => {
                <li><Book authors={book.authors} title={book.title} previewLink={book.previewLink} /></li>
            })
        )
    }

    render() {
        return(
        <ol className="books-grid">
           {renderBooks}
        </ol>
        )
    }
}

export default BookList
