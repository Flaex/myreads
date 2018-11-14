import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    books: []
  }

  updateQuery = (query) => {
     if (query) {
      BooksAPI.search(query).then(books => {
        if (books.length) {
          this.setState({books})
        } else {
          console.log('no books')
        }
      })
    } else {
      query= ''
    }
  }

  render() {
    const { query, books } = this.state
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
          <BookItem books={books}
           />
        </div>
      </div>
    )
  }
}

export default SearchBooks
