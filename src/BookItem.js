import React, { Component } from 'react'

class BookItem extends Component {
    static defaultProps = {
      books: []
    }
    handleShelfChange = (event) => {
      const shelf = event
      console.log(shelf, this.props.bookID)
    }

    render() {
    const { books, shelf } = this.props
    if (shelf) {
      books.map(book =>  book.shelf = shelf)
    }
    console.log(books)
    return(
      <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}></div>
            <ol className="books-grid">
              <div className="book-shelf-changer">
                <select value="none" onChange={(event) => this.handleShelfChange(event.target.value)}>
                  <option value="move" disabled>Move to:</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </ol>
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
