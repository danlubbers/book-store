import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import { CookieContext } from '../../context/cookieContext';
import { BooksContext } from '../../context/booksContext';
import axios from 'axios';
import ShelfCategory from './ShelfCategory/ShelfCategory';

export default function Bookshelf() {

  const [uuid, ] = useContext(CookieContext);
  const [books, setBooks] = useContext(BooksContext);

  useEffect(() => {
    ( async () => {
      try {
        const res = await axios.get(`http://localhost:7000/bookshelf/?id=${uuid}`);
        setBooks(res.data.books)
        
        
      } catch(err) {
        console.error(err);
      }
    }
    )();
  }, [uuid, setBooks]);
  
  // console.log(books)

  return (
    <>
      <Header />

      <div className='bookshelf-container'>

        <h1>Book Shelf</h1>

        <ShelfCategory 
          title='Want to Read: '
          books={books['wantToRead']}
          />

        <ShelfCategory 
          title='Currently Reading: '
          books={books['currentlyReading']}
          />

        <ShelfCategory 
          title='Read: '
          books={books['read']}
          />
       
       

      </div>
    </>
  )
}


