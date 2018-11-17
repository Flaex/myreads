import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books:[],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }  

  // filterCurrent = (books) => {
  //   this.setState({
  //     booksC: books.filter((book) => book.shelf === 'currentlyReading').map(book => book),
  //     booksW: books.filter((book) => book.shelf === 'wantToRead').map(book => book),
  //     booksR: books.filter((book) => book.shelf === 'read').map(book => book)
  //   })
  // }

  render() {
    console.log(this.state.books)
    const { books } = this.state
    let booksC = books.filter((book) => book.shelf === 'currentlyReading').map(book => book)
    let booksW = books.filter((book) => book.shelf === 'wantToRead').map(book => book)
    let booksR = books.filter((book) => book.shelf === 'read').map(book => book)

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
                <BookShelf
                  books={booksC}
                  shelf="Currently Reading"/>
                <BookShelf
                  books={booksW}
                  shelf="Want to Read" />
                <BookShelf
                  books={booksR}
                  shelf="Read" />
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
