import { useContext } from "react";
import { AlertProvidersContext } from "src/providers";

export const useAlert = () => {
  const constext = useContext(AlertProvidersContext);

  if(!constext){
   throw new Error('useAlert need to be inside of a AlertProviders')
  }
  return constext
};
