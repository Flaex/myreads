import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
  }

  componentDidMount() {
    BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
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
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelf="Currently Reading" />
                <BookShelf shelf="Want to Read" />
                <BookShelf shelf="Read" />
              </div>
            </div>
            <div className="open-search">
              <Link
              to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
