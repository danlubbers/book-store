import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
        /**
         * @type {object} - axios "GET" book Object data
         */
        const res = await axios.get(`http://localhost:7000/bookshelf/?id=${uuid}`);
        setBooks(res.data.books)
         
      } catch(err) {
        console.error(err);
      }
    }
    )();
  }, [uuid, setBooks]);

/**
 * @param {object} e - the event.
 * @param {string} slug - book.id
 */

  const changeShelf = async (e, slug) => {
    /**
     * @type {string} - shelf name
     */
    const shelf = e.target.name;

    try {
      /**
      * @type {object} - axios "PUT" request
      */ 
      const res = await axios.put(`http://localhost:7000/bookshelf/${slug}/${shelf}?id=${uuid}`);    
      setBooks(res.data.books)

    } catch(err) {
      console.log(err)
    }
  }; 
  
  return (
    <div className='bookshelf-wrapper'>
      <Header />

      <div className='bookshelf-container'>

        <ShelfCategory 
          title='Want to Read: '
          books={books && books['wantToRead']}
          changeShelf={changeShelf}
          />

        <ShelfCategory 
          title='Currently Reading: '
          books={books && books['currentlyReading']}
          changeShelf={changeShelf}
          />

        <ShelfCategory 
          title='Read: '
          books={books && books['read']}
          changeShelf={changeShelf}
          />
           
      </div>

      <Footer />
    </div>
  )
}


