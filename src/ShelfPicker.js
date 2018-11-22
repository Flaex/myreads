import React, { Component } from 'react'


class ShelfPicker extends Component {

  state = {
    option: 'selected',
  }

  updateShelf = (event) => {
    const shelf = event
    const book = this.props.book
    const bookData = [ shelf, book]
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(bookData)
    }
  }

  render() {
    const { books, book } = this.props
    if (book.shelf === undefined) {
      books.map(b =>  b.shelf = 'none')
    }
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.updateShelf(event.target.value)}>
          <option >Move to:</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfPicker
