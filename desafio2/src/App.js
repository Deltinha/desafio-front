import 'normalize.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/GlobalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}
