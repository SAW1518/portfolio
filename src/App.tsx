import { Home } from "src/pages";
import "./styles/globalStyles.css";
import { AlertProviders } from "./providers";

function App() {
  return (
    <AlertProviders>
      <Home />
    </AlertProviders>
  );
}

export default App;
