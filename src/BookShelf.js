import React, { Component } from 'react'
import BookItem from './BookItem'

class BookShelf extends Component {

  updateShelf = (bookData) => {
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(bookData)
    }
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <BookItem
            onUpdateShelf={(bookData) => {
               this.updateShelf(bookData)
            }}

            books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default BookShelf
