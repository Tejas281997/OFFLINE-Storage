
// import MMKV_STORAGE, { create } from 'react-native-mmkv-storage';

import { RestLink } from 'apollo-link-rest';
import React from 'react';
import { TodoList } from './src/screens/TodoList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MMKVWrapper, CachePersistor } from 'apollo3-cache-persist';
import { MMKV } from 'react-native-mmkv'

const restLink = new RestLink({
  uri: 'https://jsonplaceholder.typicode.com/',
});

export const MMKV_STORAGE = new MMKV();
const cache = new InMemoryCache({});
const clients = new ApolloClient({
  cache: cache,
  link: restLink,
});

export const persistor = new CachePersistor({
  cache: cache,
  storage: new MMKVWrapper(MMKV_STORAGE),
  maxSize: false,
  trigger: 'background',
})


persistor.restore();


const App = () => {
  return (
    <ApolloProvider client={clients}>
      <TodoList />
    </ApolloProvider>
  );
};

export default App;
