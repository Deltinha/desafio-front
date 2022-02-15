import 'normalize.css';
import Navbar from './components/Navbar';
import Landing from './screens/Landing';
import GlobalStyle from './styles/GlobalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Landing />
    </>
  );
}
