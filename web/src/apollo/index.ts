import { ApolloClient, InMemoryCache } from "@apollo/client";

import { configs } from "utils/configs";

export const client = new ApolloClient({
  uri: configs.endpoint,
  cache: new InMemoryCache(),
});

export default client;
