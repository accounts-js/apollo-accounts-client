/* eslint-disable no-param-reassign*/
/* eslint-disable no-underscore-dangle */

import Accounts from './Accounts';

export default {
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = new Headers();
    }
    // TODO check if access token is expired to requested new refresh token
    req.options.headers['access-token'] = Accounts._accessToken();
    req.options.headers['refresh-token'] = Accounts._refreshToken();
    next();
  },
};
