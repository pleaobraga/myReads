import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookCase from './components/BookCase'
import Search from './components/Search'


class BooksApp extends Component {

  render() {

    return(
      <BookCase />
      //<Search />
    )
  }
}

export default BooksApp
