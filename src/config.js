import extendify from 'extendify';

const extend = extendify({
  inPlace: false,
  arrays: 'replace',
});

export const defaultConfig = {
  loginWith: ['username', 'email'],
  signupWith: ['username', 'email'],
  openSignup: true,
  openLogin: true,
  // TODO Add default password validator
  passwordValidator: null,
  minPasswordLength: 6,
  // TODO Add default user checker
  usernameValidator: null,
  // TODO Add default email validator
  emailValidator: null,
  welcomeTo: '',
};

export default (config) => extend(defaultConfig, config);
