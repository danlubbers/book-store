import React, { useState, useContext, useEffect} from 'react';
import Header from '../Header/Header';
import { CookieContext } from '../../context/cookieContext';
// import noImage from '../../assets/no-image-found.svg';
import axios from 'axios';

export default function BookDetails(props) {

  const [uuid, ] = useContext(CookieContext);
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // setIsLoading(true)
        const slug = props.match.params.slug;
        // console.log(slug)
        const res = await axios.get(`http://localhost:7000/book/${slug}?id=${uuid}`);
        setBookDetails(res.data.book);
        // setIsLoading(false);

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
          <h1>Book Details Page</h1>

          <div className='book-details'>
            <img src={bookDetails.imageLinks} alt={bookDetails.title}/>
            <h2>{bookDetails.title}</h2>
          </div>
        </div>

      </>
  )
}
