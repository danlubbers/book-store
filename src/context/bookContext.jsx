import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState({
    "wantToRead": [],
    "currentlyReading": [],
    "read": []
  });

  return (
    <BookContext.Provider value={[books, setBooks]}>
        {children}
    </BookContext.Provider>
  )
}