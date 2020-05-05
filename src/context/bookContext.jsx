import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {

  const [book, setBook] = useState({});

  return (
    <BookContext.Provider value={[book, setBook]}>
        {children}
    </BookContext.Provider>
  )
}