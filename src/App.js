import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() => (
          <SearchBooks
          />
        )}/>

        <Route exact path='/' render={() => (
          <ListBooks
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
