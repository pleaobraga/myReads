import React from 'react'
import './App.css'
import BookCase from './components/BookCase'
import Search from './components/Search'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function BooksApp(){
  return(
    <BrowserRouter>
    <span>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={BookCase} />
      </Switch>        
    </span>      
  </BrowserRouter> 
  )
}


export default BooksApp
