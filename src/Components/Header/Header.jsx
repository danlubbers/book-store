import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Header() {
  
  return (
    <header>
      <nav>
        <Link to='/'> <h4 className='home-text'> Home </h4></Link>
        <Link to='/cookie/bookshelf'> <h1 className='bookshelf-text'> BookShelf </h1></Link>
        <Link to='/cookie/search'><h4 className='search-text'><FontAwesomeIcon icon={faSearch} size='xs'/> Search </h4></Link>
      </nav>
    </header>
  )
}
