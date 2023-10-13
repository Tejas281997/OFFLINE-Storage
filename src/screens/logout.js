import {StyleSheet, TouchableOpacity, Text, Button} from 'react-native'

import {MMKV_STORAGE, purgeCache} from '../apolloClient'


 

export default function Logout() {

  return (

    
    <Button

      onPress={async () => {

        // log(' usertoken', userToken)

        const keys = MMKV_STORAGE.getAllKeys()

        log('keys', keys)

        purgeCache();
        log('logged out!!')
        
        // await persistor.pause()
        // await persistor.purge()
        // await client.reset()
        // onPress={handleCreateTodo}>
      }}>

      <title >Logout</title>

    </Button>

  )

}

 

const styles = StyleSheet.create({

  logoutTextStyles: {

    fontSize: 16,

    textAlign: 'center',

    // color: Colors.light.secondary,

  },

})

 