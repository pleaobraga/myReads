import React, { Component } from 'react'
import '../App.css'
import Book from './Book'

class BookList extends Component {

    renderBooks() {

        if(this.props.books !== null) {
            return this.props.books.map((book, index) => {
                    return( 
                        <li>
                            <Book key={index} shelf={book.shelf} authors={book.authors} title={book.title} thumbnail={book.imageLinks.thumbnail} />
                        </li>
                    )
                });
        }


        return null;
    }

    render() {
        return(
        <ol className="books-grid">
           {this.renderBooks()}
        </ol>
        )
    }
}

export default BookList
