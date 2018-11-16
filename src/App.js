import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
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

  updateShelf(bookData) {
    const shelf = bookData[0]
    const book = bookData[1]
    BooksAPI.update(book, shelf).then(books => {
      this.setState(state => ({
        books: books
      }))
    })
  }

  render() {
    console.log(this.state.books)
    const { books } = this.state
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
                <BookShelf books={books} shelf="Currently Reading" />
                <BookShelf books={books} shelf="Want to Read" />
                <BookShelf books={books} shelf="Read" />
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
