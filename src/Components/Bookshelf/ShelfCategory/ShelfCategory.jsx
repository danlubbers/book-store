import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BooksContext } from '../../../context/booksContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function ShelfCategory(props) {

  console.log('props ', props);

  const [, setBooks] = useContext(BooksContext)
  return (
    
    <div className='shelf-container'> 
      <h2 className='category-title' >{props.title}</h2>

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
                <Dropdown.Item onChange={() => console.log("Want to Read!")}>Want to Read </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Currently Reading</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Read</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        )
      })}

    </div>
      
  )
}