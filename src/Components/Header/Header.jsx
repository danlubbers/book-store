import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  return (
    <nav>
      <h1> BookShelf </h1>
      <h4> <button className='searchBtn'><FontAwesomeIcon icon={faSearch} size='sm'/></button> Search </h4>
    </nav>
  )
}
