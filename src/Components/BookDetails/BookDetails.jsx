import React, { useState, useContext, useEffect} from 'react';
import Header from '../Header/Header';
import { Spinner } from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import noImage from '../../assets/no-image-found.svg';
import axios from 'axios';

export default function BookDetails(props) {

  const [uuid, ] = useContext(CookieContext);
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const slug = props.match.params.slug;
        // console.log(slug)
        const res = await axios.get(`http://localhost:7000/book/${slug}?id=${uuid}`);
        setBookDetails(res.data.book);
        setIsLoading(false);

      } catch(err) {
          console.error(err)
      }
    }
    )()
  }, [uuid, props.match.params.slug])

  // console.log(Array.isArray(bookDetails))
  console.log(bookDetails)

  return (
      <>
        <Header />
        <div className='book-details-container'>
        
        {isLoading &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 
        }

          <div className='book-details'>
            <div className='details-top'>
              {bookDetails.imageLinks 
                && <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title}/>
                // :  <img src={noImage} style={{width: '128px'}} alt={bookDetails.title} /> 
              }
              <div className='details-top-right'>
                <h6>
                  {/* This checks if there are not authors listed */}
                    {!bookDetails.authors 
                      ? null 
                      // This checks if there are more than one author and this loops over the array of authors to display them correctly
                      : bookDetails.authors.length > 1 
                      ? bookDetails.authors.map((author, i) => {
                        return <div key={i}> 
                          <h6 className='book-author'>{author}</h6>
                          </div>
                        })
                        // If only one author is found, display that author
                      : <h6 className='book-author'> {bookDetails.authors} </h6>
                    }
                </h6>
                <h6>{bookDetails.publishedDate}</h6>
                <h6>{bookDetails.publisher}</h6>

                <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant='secondary'>
                  <Dropdown.Item href="#/action-1">Want to Read </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Currently Reading</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Read</Dropdown.Item>
                </DropdownButton>

                </div>
              </div>
              <div className='details-bottom'>
                <h2 className='book-title'>{bookDetails.title}</h2>
                <h5 className='book-subtitle'>{bookDetails.subtitle}</h5>
                <p className='book-description'>{bookDetails.description}</p>
                <h6 className='book-categories'>{bookDetails.categories}</h6>
              </div>

          </div>
        </div>

      </>
  )
}
