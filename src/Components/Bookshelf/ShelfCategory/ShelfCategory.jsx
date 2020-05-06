import React from 'react'

export default function ShelfCategory(props) {

  // console.log(props.books)
  return (
    
    <div className='shelf-container'> 
      <h2 className='category-title' >{props.title}</h2>

      {props.books.map((book, i) => {    
        return (
          <div className='shelf-book' key={i}>
            <img src={book.imageLinks.thumbnail} alt={book.title}/>
            <h5 className='book-title'>{book.title}</h5>
          </div>
        )
      })}
    </div>
      
  )
}
