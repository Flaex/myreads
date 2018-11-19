import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    booksFound: []
  }

  updateQuery = (query) => {
     if (query) {
      BooksAPI.search(query).then(booksFound => {
        if (booksFound.length) {
          this.setState({booksFound})
        } else {
          console.log('no books')
          this.setState({booksFound: []})
        }
      })
    } else if (query === ''){
      this.setState({booksFound: []})
    } else {
      this.setState({booksFound: []})
    }
  }

  updateShelf = (bookData) => {
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(bookData)
    }
  }

  render() {
    const { query, booksFound } = this.state
    return(
      <div className="search-books">
      <div className="search-books-bar">
        <Link
        className="close-search"
        to="/"
        >Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type='text'
            placeholder='Search by title or author'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
        <div className="search-books-results">
          <BookItem
            onUpdateShelf={(bookData) => {
               this.updateShelf(bookData)
            }}
            books={booksFound}
           />
        </div>
      </div>
    )
  }
}

export default SearchBooks
