import { createNetworkInterface } from 'apollo-client';
import accountsNetworkInterfaceMiddleware from './accountsNetworkInterfaceMiddleware';

export default createNetworkInterface('/graphql', {
  credentials: 'same-origin',
}).use([accountsNetworkInterfaceMiddleware]);
