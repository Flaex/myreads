import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books:[],
    noBook: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateShelf = (bookData) => {
    const shelf = bookData[0]
    const book = bookData[1]
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      const selectedBook = this.state.books.filter((b) => b.id === book.id).map(c => c.id)
      console.log(selectedBook[0] === book.id)
      // moving an existing book to another shelf
      if (selectedBook[0] === book.id) {
        this.setState((state) => ({
          noBook: state.books.concat([ book ]),
          
        }))
        // add a new book to a shelf
      } else {
        this.setState((state) => ({
          books: state.books.concat([ book ])
        }))
      }
    })
    console.log(this.state.books)
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
            onShelves={books}
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
