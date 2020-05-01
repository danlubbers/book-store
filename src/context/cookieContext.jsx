import React, { useState, createContext } from 'react';
import { getSessionCookie, setSessionCookie } from '../utils/Cookies.util';


export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [uuid, setUUID] = useState(getSessionCookie());

  const setSessionUUID = newUUID => {
    setSessionCookie(newUUID);
    setUUID(newUUID)
  }
  
  return (
    <CookieContext.Provider value={[uuid, setSessionUUID]}>
      { children }
    </CookieContext.Provider>
  )
};