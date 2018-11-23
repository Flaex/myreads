import React, { Component } from 'react'

class ShelfPicker extends Component {

  constructor() {
    super();
    this.state = {
      selected: 'selected'
    }
  }

  handleOptionChange = () => {
    // this.setState({
    //   selected: this.props.book.shelf
    // })

    if (this.props.book.shelf === 'currentlyReading' ) {
      this.handleOptionChange.value = 'currentlyReading'
    }

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
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.updateShelf(event.target.value)} ref={select => this.handleOptionChange = select}>
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
