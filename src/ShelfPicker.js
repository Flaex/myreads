import React, { Component } from 'react'

class BookItem extends Component {

    updateShelf = (event) => {
      const shelf = event
      const book = {id:''}
      book.id = this.props.bookID
      const bookData = [ shelf, book]
      console.log(bookData)
      if (this.props.onUpdateShelf) {
        this.props.onUpdateShelf(bookData)
      }
    }

  render() {
    return(
      <ol className="books-grid">
        <div className="book-shelf-changer">
          <select onChange={(event) => this.updateShelf(event.target.value)}>
            <option value="move" disabled>Move to:</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </ol>
    )
  }
}

export default BookItem
