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

  const changeShelf = async (e, slug) => {

    const shelf = e.target.name;

    try {

      let res = await axios.put(`http://localhost:7000/bookshelf/${slug}/${shelf}?id=${uuid}`);    
      setBooks(res.data.books)

    } catch(err) {
      console.log(err)
    }
  }; 
  
  return (
    <>
      <Header />

      <div className='bookshelf-container'>

        <ShelfCategory 
          title='Want to Read: '
          books={books['wantToRead']}
          changeShelf={changeShelf}
          />

        <ShelfCategory 
          title='Currently Reading: '
          books={books['currentlyReading']}
          changeShelf={changeShelf}
          />

        <ShelfCategory 
          title='Read: '
          books={books['read']}
          changeShelf={changeShelf}
          />
           
      </div>
    </>
  )
}


