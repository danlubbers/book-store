import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BooksContext } from '../../../context/booksContext';
import { CookieContext } from '../../../context/cookieContext';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

export default function ShelfCategory(props) {

  // console.log('props ', props);

  const [uuid, ] = useContext(CookieContext);
  const [, setBooks] = useContext(BooksContext);
  
  const changeShelf = async (e, slug) => {
    const shelf = e.target.name;
    try {

      await axios.put(`http://localhost:7000/bookshelf/${slug}/${shelf}?id=${uuid}`);    
      // Hacky way to refresh page, but works till I figure out a better way.
      window.location.reload(true); 

    } catch(err) {
      console.log(err)
    }
  }; 

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
                <Dropdown.Item name='none' onClick={(e) => changeShelf(e, slug)}> None </Dropdown.Item>
                <Dropdown.Item name='wantToRead' onClick={(e) => changeShelf(e, slug)}> Want to Read </Dropdown.Item>
                <Dropdown.Item name='currentlyReading' onClick={(e) => changeShelf(e, slug)}> Currently Reading</Dropdown.Item>
                <Dropdown.Item name='read' onClick={(e) => changeShelf(e, slug)}> Read</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        )
      })}

    </div>
      
  )
}