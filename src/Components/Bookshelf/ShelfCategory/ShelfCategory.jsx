import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BooksContext } from '../../../context/booksContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Proptypes from 'prop-types';

export default function ShelfCategory(props) {

  const [, setBooks] = useContext(BooksContext);

  return (
    
    <div className='shelf-container'> 
      <h2 className='category-title' >{props.title}</h2>

      {/* Checks if books are truthy and if so runs the map, otherwise error is undefined */}
      {props.books && props.books.map((book, i) => { 
        const slug = book.id;   
        return (
          <div className='shelf-book' key={i}>
            <img src={book.imageLinks.thumbnail} alt={book.title}/>
            <div className='shelf-info'>
              <Link to={`/cookie/book/${slug}`} onClick={() => setBooks(book)}>
                <h5 className='book-title'>{book.title}</h5>
              </Link>
              <DropdownButton id="dropdown-basic-button" title="Change Shelf" variant='secondary'>
                {/* The onClick anonymous function runs a function within a function so that I can pass the event to the changeShelf function as well as a second parameter, being the slug ID */}
                <Dropdown.Item name='none' onClick={(e) => props.changeShelf(e, slug)}> None </Dropdown.Item>
                <Dropdown.Item name='wantToRead' onClick={(e) => props.changeShelf(e, slug)}> Want to Read </Dropdown.Item>
                <Dropdown.Item name='currentlyReading' onClick={(e) => props.changeShelf(e, slug)}> Currently Reading </Dropdown.Item>
                <Dropdown.Item name='read' onClick={(e) => props.changeShelf(e, slug)}> Read </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        )
      })}

    </div>
      
  )
}

ShelfCategory.propTypes = {
  title: Proptypes.string.isRequired,
  books: Proptypes.array,
  changeShelf: Proptypes.func.isRequired,

}