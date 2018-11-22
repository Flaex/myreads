import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    searchResults: []
  }

  updateQuery = (query) => {
     if (query) {
      BooksAPI.search(query).then(searchResults => {
        if (searchResults.length) {
          this.setState({searchResults})
        } else {
          console.log('no books')
          this.setState({searchResults: []})
        }
      })
    } else if (query === ''){
      this.setState({searchResults: []})
    } else {
      this.setState({searchResults: []})
    }
  }

  updateShelf = (bookData) => {
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(bookData)
    }
  }

  render() {
    const { query, searchResults } = this.state
    const { onShelves } = this.props
    const onShelvesID = onShelves.map(b => b.id)
    const searchResultsID = searchResults.map(b => b.id)
    console.log(onShelvesID, searchResultsID)




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
            books={searchResults}
           />
        </div>
      </div>
    )
  }
}

export default SearchBooks
