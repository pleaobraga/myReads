import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import '../App.css'

class BookListShelf extends Component {

    filterShelfBooks() {
        if(this.props.books.length > 0 ) {
            return this.props.books.filter((book) => book.shelf === this.props.filter)
        }

        return null;
    }

    

    renderBooks(books) {
        if(books !== null) {
            return books.map((book, index) => {
                return( 
                    <li key={index} >
                        <Book key={index} book={book} updateShelf={this.props.updateShelf} />
                    </li>
                )
            });
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
                            <ol className="books-grid">
                                {this.renderBooks(books)}
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookListShelf
