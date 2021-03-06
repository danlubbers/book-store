import React, { useState, useContext, useEffect} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Spinner } from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
// import noImage from '../../assets/no-image-found.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function BookDetails(props) {

  const [uuid, ] = useContext(CookieContext);
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const slug = props.match.params.slug;
        const res = await axios.get(`http://localhost:7000/book/${slug}?id=${uuid}`);
        setBookDetails(res.data.book);
        setIsLoading(false);

      } catch(err) {
          setHasError(true);
          setErrorMessage(err.message)
          console.error(err.message)
      }
    }
    )()
  }, [uuid, props.match.params.slug]);


  const changeShelf = async (e) => {
    const shelf = e.target.name;
    const slug = props.match.params.slug;
    try {
      await axios.put(`http://localhost:7000/bookshelf/${slug}/${shelf}?id=${uuid}`);
      // Using routers history to go to the bookshelf page after user selects which shelf they would like to put the book in
      history.push('/cookie/bookshelf')
      
    } catch(err) {
      console.log(err)
    }
  };

  return (
      <div className='book-details-wrapper'>
        <Header />
        <div className='book-details-container'>
        
        {isLoading && !hasError &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 
        }

        {hasError 
          ? <Alert variant='danger'>{`An Error has occured with your search results: ${errorMessage}`}</Alert>

          : <div className='book-details'>
              <div className='details-top'>
                {bookDetails.imageLinks 
                  && <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title}/>
                  // :  <img src={noImage} style={{width: '128px'}} alt={bookDetails.title} /> 
                }
                <div className='details-top-right'>
                  
                    {/* This checks if there are no authors listed */}
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
                  
                  <h6>{bookDetails.publishedDate}</h6>
                  <h6>{bookDetails.publisher}</h6>

                  
                  <DropdownButton id="dropdown-basic-button" title="Change Shelf" variant='secondary'>
                    <Dropdown.Item name='none' onClick={changeShelf}> None </Dropdown.Item>
                    <Dropdown.Item name='wantToRead' onClick={changeShelf}> Want to Read </Dropdown.Item>
                    <Dropdown.Item name='currentlyReading' onClick={changeShelf}> Currently Reading</Dropdown.Item>
                    <Dropdown.Item name='read' onClick={changeShelf}> Read</Dropdown.Item>
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
        }

        </div>

        <Footer />
      </div>
  )
}
