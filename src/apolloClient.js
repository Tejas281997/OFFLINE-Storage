import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { MMKVWrapper, CachePersistor } from 'apollo3-cache-persist';
import {MMKV} from 'react-native-mmkv'
// import MMKV_STORAGE, { create } from 'react-native-mmkv-storage';

import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://jsonplaceholder.typicode.com/',
});

// const MMKV: MMKVStorage.API = new MMKVStorage.Loader().initialize();
export const MMKV_STORAGE = new MMKV();
// const MMKV = new MMKVStorage;
const cache = new InMemoryCache({});
const clients = new ApolloClient({
  cache: cache,
  link: restLink,
});

export const persistor = new CachePersistor({
  cache:cache,
  // MMKVWrapper
  storage: new MMKVWrapper(MMKV_STORAGE),
  // storage: create(MMKV),
  maxSize: false,
  trigger: 'background',
})


persistor.restore();
// export const restoreCache = async () => {
//   await persistor.restore();
// };

// console.log("ssss")
// const keys = MMKV_STORAGE.getAllKeys()

// console.log('keys', keys);

export const purgeCache = async () => {
  
     persistor.pause()
  
     persistor.purge()

     clients.resetStore()
  
  }


