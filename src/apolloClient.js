import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MMKVWrapper, CachePersistor } from 'apollo3-cache-persist';
import { MMKV } from 'react-native-mmkv'
import { RestLink } from 'apollo-link-rest';

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


export const purgeCache = async () => {
  persistor.pause()
  persistor.purge()
  clients.resetStore()

}


