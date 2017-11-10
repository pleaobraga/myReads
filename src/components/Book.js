import React, { Component } from 'react'
import '../App.css'

class Book extends Component {

    renderAuthors() {
        if(this.props.book.authors) {
            return(
                this.props.book.authors.forEach((author) => {
                    <div className="book-authors">{author}</div>
                })    
            )
        }

        return null;
    }

    updateBookShelf(event) {
        let shelf = event.target.value;
        this.props.book.shelf = shelf;
        this.props.updateShelf(this.props.book,shelf)
    }

    render() {



        return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf || "none"} onChange={this.updateBookShelf.bind(this)} >
                    <option value="" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            {this.renderAuthors()}
        </div>      
        )
    }
}

export default Book

