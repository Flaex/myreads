import React, { Component } from 'react'
import ShelfPicker from './ShelfPicker'

class BookItem extends Component {

    isThumbnail = (book) => {
      const placeholder = 'https://via.placeholder.com/128x193'
      const thumbnail = book.imageLinks === undefined ? placeholder : book.imageLinks.smallThumbnail
      return thumbnail
    }

    updateShelf = (bookData) => {
      if (this.props.onUpdateShelf) {
        this.props.onUpdateShelf(bookData)
      }
    }

    render() {
    const { books } = this.props
    return(
      <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128, height: 193,
              backgroundImage: `url(${this.isThumbnail(book)})`
            }}></div>
            <ShelfPicker
              onUpdateShelf={(bookData) => {
                 this.updateShelf(bookData)
              }}
              book={book}
              books={books} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
        </li>
      ))}
      </ol>
    )
  }
}

export default BookItem
