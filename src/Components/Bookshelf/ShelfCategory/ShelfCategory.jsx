import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BooksContext } from '../../../context/booksContext';

export default function ShelfCategory(props) {

  console.log('props ', props.books)

  const [, setBooks] = useContext(BooksContext)
  return (
    
    <div className='shelf-container'> 
      <h2 className='category-title' >{props.title}</h2>

      {props.books && props.books.map((book, i) => { 
        const slug = book.id;   
        return (
          <div className='shelf-book' key={i}>
            <img src={book.imageLinks.thumbnail} alt={book.title}/>
            <Link to={`/cookie/book/${slug}`} onClick={() => setBooks(book)}>
              <h5 className='book-title'>{book.title}</h5>
            </Link>
          </div>
        )
      })}

    </div>
      
  )
}