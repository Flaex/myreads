import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateShelf = (bookData) => {
    const [shelf, book] = bookData;
    const { books } = this.state
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      const bookIndex = books.indexOf(book);
      if (bookIndex === -1) {
        this.setState({books: books.concat([ book ])})
      } else {
        this.setState((state, book) => ({
          books: state.books.concat([ book ])
        }))
      }
    })
  }

  render() {
    const { books } = this.state
    const booksC = books.filter((book) => book.shelf === 'currentlyReading').map(book => book)
    const booksW = books.filter((book) => book.shelf === 'wantToRead').map(book => book)
    const booksR = books.filter((book) => book.shelf === 'read').map(book => book)

    return (
      <div className="app">

        <Route path='/search' render={() => (
          <SearchBooks
            books={books}
            onUpdateShelf={(bookData) => {
               this.updateShelf(bookData)
            }}
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
                  onUpdateShelf={(bookData) => {
                     this.updateShelf(bookData)
                  }}
                  books={booksC}
                  shelf="Currently Reading"/>
                <BookShelf
                  onUpdateShelf={(bookData) => {
                     this.updateShelf(bookData)
                  }}
                  books={booksW}
                  shelf="Want to Read" />
                <BookShelf
                  onUpdateShelf={(bookData) => {
                     this.updateShelf(bookData)
                  }}
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
