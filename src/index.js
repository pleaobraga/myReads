import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BookCase from './components/BookCase'
import Search from './components/Search'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
      <span>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={BookCase} />
      </Switch>        
      </span>      
    </BrowserRouter>    , document.getElementById('root'))
