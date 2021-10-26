import React, { useContext } from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';
import Container from 'react-bootstrap/Container';
import Body from './components/body';
import Search from './components/search';
import {theme} from "./components/theme";
import { ThemeContext } from "./ThemeProvider";
import ThemeToggle from './components/themeToggle';

const getStyles = (mode) => ({
  app: {
    backgroundColor: theme[mode].backgroundColor
  }
});

function App() {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="App d-flex align-items-start align-items-sm-center" style={(styles.app)}>
      <Container>
        <ThemeToggle></ThemeToggle>
        <Search></Search>
        <Body></Body>
      </Container>
    </div>
  );
}

export default App;
