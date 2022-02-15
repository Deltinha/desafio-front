import 'normalize.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './screens/Landing';
import GlobalStyle from './styles/GlobalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
