import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import { FormGroup, FormControl } from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import axios from 'axios';

export default function Search() {

  const [uuid, ] = useContext(CookieContext)  
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);


  const searchBooks = async () => {

      try {
        const res = await axios.get(`http://localhost:7000/book/search/${search}?id=${uuid}`);
        setBooks(res.data.books);

        console.log(res.data.books)
        
      } catch(err) {
        console.error(err);
      }
    }
    
    console.log(books)


  return (
    <>
      <Header />

      <div className='search-container'>
        <h1>Search Page</h1>
        <FormGroup className="mb-3 searchGroup">
          <FormControl className='inputSearch' type="text" placeholder='Search' aria-label="Search" name='search' value={search} onChange={e => setSearch(e.target.value)}/> 
        <button type='submit' className='btn btn-secondary searchBtn' onClick={searchBooks}>Search</button>
        </FormGroup>

        {books.map((book, i) => {
          return <div key={i}>
            {book.imageLinks ? 
              <img src={book.imageLinks.thumbnail} alt={book.title} /> : 
              <h1>No Image was found!</h1>
            }
            <h1>{book.authors}</h1>
            <h1>{book.title}</h1>
            <p>{book.subtitle}</p>
          </div>
        })}

      </div>

    </>
  )
}
