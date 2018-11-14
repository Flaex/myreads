import React, { Component } from 'react'

class BookItem extends Component {
      static defaultProps = {
      books: []
    }
    render() {
    const { books } = this.props
    return(
      <ol className="books-grid">
        <div className="book-shelf-changer">
          <select onChange={this.handleShelfChange}>
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
