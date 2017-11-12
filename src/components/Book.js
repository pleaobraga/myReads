import React from 'react'
import '../App.css'

function Book(props) {

    let { book } = props;

    function renderAuthors() {
        if(book.authors) {
            return(
                book.authors.forEach((author) => {
                    <div className="book-authors">{author}</div>
                })    
            )
        }

        return null;
    }

    function updateBookShelf(event) {
        let shelf = event.target.value;
        book.shelf = shelf;
        props.updateShelf(book,shelf)
    }


    return(
    <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
        <div className="book-shelf-changer">
            <select value={book.shelf || "none"} onChange={updateBookShelf} >
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
        </div>
        <div className="book-title">{book.title}</div>
        {renderAuthors()}
    </div>      
    )
    
}

export default Book

