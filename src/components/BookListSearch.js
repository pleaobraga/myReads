import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import '../App.css'

class BookListSearch extends Component {
    
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
        
        let { books } = this.props;

        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    <li>
                        <ol className="books-grid">
                            {this.renderBooks(books)}
                        </ol>
                    </li>
                </ol>
            </div>
        )
    }
}

export default BookListSearch
