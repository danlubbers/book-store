import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Header(props) {
  console.log(props)
  return (
    <header>
      <nav>
        <Link to='/cookie/bookshelf'> <h1> BookShelf </h1></Link>
        <Link to='/cookie/search'><h4><FontAwesomeIcon icon={faSearch} size='sm'/> Search </h4></Link>
      </nav>
    </header>
  )
}
