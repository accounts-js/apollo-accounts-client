/* eslint-disable no-param-reassign*/
/* eslint-disable no-underscore-dangle */

import 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import Accounts from './Accounts';

const isExpired = (decodedToken) => decodedToken.exp < Date.now() / 1000;

export default {
  applyMiddleware(req, next) {
    debugger;

    if (!req.options.headers) {
      req.options.headers = new Headers();
    }
    // TODO check if access token is expired to requested new refresh token
    const accessToken = Accounts._accessToken();
    const refreshToken = Accounts._refreshToken();

    const setHeaders = () => {
      req.options.headers['access-token'] = Accounts._accessToken();
      req.options.headers['refresh-token'] = Accounts._refreshToken();
    };

    if (accessToken && refreshToken) {
      const decodedToken = jwtDecode(accessToken);
      if (isExpired(decodedToken)) {
        console.log(refreshToken);
        fetch('/refresh-tokens', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        }).then(res => {
          console.log(res.body);
          setHeaders();
          next();
        }).catch(err => {
          // TODO Handle
          console.log(e);
        });
      }
    } else {
      setHeaders();
      next();
    }
  },
};
