import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import { FormGroup, FormControl, Spinner } from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import noImage from '../../assets/no-image-found.svg';
import axios from 'axios';

export default function Search() {

  const [uuid, ] = useContext(CookieContext)  
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);


  const searchBooks = async () => {

      try {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:7000/book/search/${search}?id=${uuid}`);
        setBooks(res.data.books);

        console.log(res.data.books)
        setIsLoading(false)
        
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

        {isLoading &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 
        }

        {books.map((book, i) => {
          return <div key={i} className='book-container'>
            <div className='book-image'>
              {book.imageLinks 
                ?  <img src={book.imageLinks.thumbnail} alt={book.title} />
                :  <img src={noImage} style={{width: '128px'}} alt={book.title} /> 
              }
            </div>
            <div className='book-info'>
              <h5>{book.title}</h5>
              <p>{book.subtitle}</p>
              <h5>{book.authors}</h5>
            </div>
          </div>
        })}
      
      </div>

    </>
  )
}
