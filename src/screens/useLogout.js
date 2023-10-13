import { useCallback } from "react";

import { clients, persistor } from "../apolloClient";



 

export default function useLogout() {

  
  

  const logout = useCallback(function logout() {

    //TODO: Clear persistor storage cache

    // persistor.pause();

    // persistor.purge();

    // //TODO: Clear InMemory Store cache

    // clients.resetStore();

  }, []);

  return logout;

}