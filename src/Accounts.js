import { registerUser } from './mutations';

const Accounts = {
  _accessToken() {
    return localStorage.getItem('apollo-accounts:accessToken');
  },
  _refreshToken() {
    return localStorage.getItem('apollo-accounts:refreshToken');
  },
  loginWithProvider(provider) {
    window.open(`/connect/${provider}`,
      // TODO What is the best size for the popup window?
      'Authorize Application', 'height=500,width=600');
  },
  registerUser(client, { user, username, email, password }) {
    return client
      .mutate(registerUser(user, username, email, password));
  },
};

export default Accounts;
