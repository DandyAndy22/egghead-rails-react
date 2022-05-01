import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: '<your_app_uri>/graphql',
    cache: new InMemoryCache()
  });

  export default client