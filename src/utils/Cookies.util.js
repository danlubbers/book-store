import Cookies from 'js-cookie';

/**
 * @param {string} uuid  - uuid cookie.
 */

export const setSessionCookie = uuid => {
  Cookies.set('session', uuid, { expires: 1 });
};

/** @function getSessionCookie */

export const getSessionCookie = () => {
  /**
   * @type string
   */

  const sessionCookie = Cookies.get('session');
  return sessionCookie && sessionCookie;
};

/** @function destroySessionCookie */

export const destroySessionCookie = () => {
  Cookies.remove('session');
};