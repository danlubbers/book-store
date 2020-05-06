import React, { useState, createContext } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={[books, setBooks]}>
        {children}
    </BooksContext.Provider>
  )
}