import Cookies from 'js-cookie';

export const setSessionCookie = uuid => {
  Cookies.set('session', uuid, { expires: 1 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get('session');
  return sessionCookie && sessionCookie;
};

export const destroySessionCookie = () => {
  Cookies.remove('session');
};