import React, { Component } from 'react'
import BookItem from './BookItem'

class BookShelf extends Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <BookItem books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default BookShelf
