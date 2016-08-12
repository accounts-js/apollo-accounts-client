import gql from 'graphql-tag';

const registerUser = (user, username, email, password) => ({
  mutation: gql`
    mutation ($user: String, $username: String, $email: String, $password: String!) {
      registerUser(user: $user, username: $username, email: $email, password: $password) {
        id
      }
    }
  `,
  variables: {
    user,
    username,
    email,
    password,
  },
});

export { registerUser };
