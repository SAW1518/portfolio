import { createContext, ReactNode, useMemo, useState, useCallback, useEffect } from 'react';

export interface AlertProvidersType {
  showAlert: boolean;
  // setShowAlert: Dispatch<SetStateAction<boolean>>;
  show: () => void;
}

export const AlertProvidersContext = createContext<AlertProvidersType>({} as AlertProvidersType);

export const AlertProviders = ({ children }: { children: ReactNode }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const show = useCallback(() => setShowAlert(true), []);

  useEffect(() => {
    const disappear = () => setShowAlert(false);
    if (showAlert) {
      setInterval(() => {
        disappear();
      }, 3000);
    }
  }, [showAlert]);

  const contexValues: AlertProvidersType = useMemo(
    () => ({
      showAlert,
      show,
    }),
    [showAlert, show],
  );
  return (
    <AlertProvidersContext.Provider value={contexValues}>{children}</AlertProvidersContext.Provider>
  );
};
