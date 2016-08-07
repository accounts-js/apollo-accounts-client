const Accounts = {
  getLoginUrlFor(provider) {
    return `/connect/${provider}`;
  },
};

export default Accounts;
