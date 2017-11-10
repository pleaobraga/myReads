import React, { Component } from 'react'
import '../App.css'

class Book extends Component {

    renderAuthors() {
        if(this.props.authors) {
            return(
                this.props.authors.forEach((author) => {
                    <div className="book-authors">{author}</div>
                })    
            )
        }

        return null;
    }

    render() {
        return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
                <select value={this.props.shelf} >
                    <option value="" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            {this.renderAuthors()}
        </div>      
        )
    }
}

export default Book

