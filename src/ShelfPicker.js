import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookItem extends Component {

  updateShelf = (event) => {
    const shelf = event
    const book = {id:''}
    book.id = this.props.bookID
    BooksAPI.update(book, shelf).then(books => {
      this.setState(state => ({books}))
    })
  }

  // updateBooks(bookData) {
  //   const shelf = bookData[0]
  //   const book = bookData[1]
  //   BooksAPI.update(book, shelf).then(books => {
  //     this.setState(state => ({
  //       books: books
  //     }))
  //   })
  // }

  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.updateShelf(event.target.value)}>
          <option selected="true" disabled="disabled">Move to:</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookItem
