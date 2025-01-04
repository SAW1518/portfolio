import { useContext } from 'react';
import { AlertProvidersContext } from 'src/providers';

export const useAlert = () => {
  const constext = useContext(AlertProvidersContext);

  return constext;
};
