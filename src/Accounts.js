const Accounts = {
  loginWithProvider(provider) {
    window.open(`/connect/${provider}`,
      'Authorize Application', 'height=500,width=600');
  },
};

export default Accounts;
