import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import { FormGroup, FormControl, Spinner, Alert } from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import { BooksContext } from '../../context/booksContext';
import noImage from '../../assets/no-image-found.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Search() {

  const [uuid, ] = useContext(CookieContext);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useContext(BooksContext);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('No search results were found!');

  const searchBooks = async (e) => {
    e.preventDefault();

      try {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:7000/book/search/${search}?id=${uuid}`);
        setBooks(res.data.books);
        setIsLoading(false)
        setHasError(false);
        
      } catch(err) {
          setHasError(true);
          console.error(err);
      }
    }

    // console.log({books})

  return (
    <>
      <Header />

      <div className='search-container'>
        <h1>Search</h1>
        <form onSubmit={searchBooks}> 
          <FormGroup className="mb-3 searchGroup">
            <FormControl className='inputSearch' type="text" placeholder='Search' aria-label="Search" name='search' value={search} onChange={e => setSearch(e.target.value)}/>       
            <button type='submit' className='btn btn-secondary searchBtn'>Search</button>            
          </FormGroup>
        </form>

        {isLoading && !hasError && 
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 
        }

        {!books || hasError
          ? <Alert variant='danger'>{errorMessage}</Alert>
          // Fixed issue where books.map was undefined due to data not being retrieved 
          : books.length > 1 && books.map((book, i) => {
              const slug = book.id;
              return <div key={i} className='book-container'>
                <div className='book-image'>
                  {/* Check if there are images in the api and display, if not use default image */}
                  {book.imageLinks 
                    ?  <img src={book.imageLinks.thumbnail} alt={book.title} />
                    :  <img src={noImage} style={{width: '128px'}} alt={book.title} /> 
                  }
                </div>
                <div className='book-info'>
                  <Link to={`/cookie/book/${slug}`} onClick={() => setBooks(book)}>
                    <h5>{book.title}</h5>
                  </Link>
                  {/* Check if there is a subtitle and if there is not does not render a blank space for nicer readability */}
                  {book.subtitle && 
                    <p>{book.subtitle}</p>
                  }
                  <h6>
                    {/* This checks if there are not authors listed */}
                    {!book.authors 
                      ? null 
                      // This checks if there are more than one author and this loops over the array of authors to display them correctly
                      : book.authors.length > 1 
                        ? book.authors.map((author, i) => {
                          return <div key={i}> 
                            <h6>{author}</h6>
                          </div>
                        })
                        // If only one author is found, display that author
                        : book.authors
                    }
                  </h6>
                </div>
              </div>
            })}
      
      </div>

    </>
  )
}
