import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class BookCase extends Component {

    render() {
        return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book />
                    </li>
                </ol>
            </div>
        </div>
        )
    }
}

export default BookCase
