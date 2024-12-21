import {
  createContext,
  ReactNode,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AlertProvidersType {
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}

export const AlertProvidersContext = createContext<AlertProvidersType>(
  {} as AlertProvidersType,
);

export const AlertProviders = ({ children }: { children: ReactNode }) => {
const [showAlert, setShowAlert] = useState<boolean>(false);
const contexValues: AlertProvidersType = useMemo(
    () => ({
      showAlert,
      setShowAlert,
    }),
    [],
  );
  return (
    <AlertProvidersContext.Provider value={contexValues}>
      {children}
    </AlertProvidersContext.Provider>
  );
};
