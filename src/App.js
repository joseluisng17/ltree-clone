import { Principal } from "./components/Principal";
import { LinkProvider } from "./context/LinkContext";
import './styles.css';

function App() {
  return (
    <LinkProvider>
      <Principal />
    </LinkProvider>
  );
}

export default App;
