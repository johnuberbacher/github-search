import React, { useEffect, useContext } from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';
import Container from 'react-bootstrap/Container';
import Body from './components/body';
import Search from './components/search';
import ThemeToggle from "./components/themeToggle";

class App extends React.Component {
  render() {
    return (
      <div className="App d-flex align-items-start align-items-sm-start">
        <Container>
          <ThemeToggle></ThemeToggle>
          <Body accounts={this.accounts}></Body>
        </Container>
      </div>
    )
  };
}

export default App;
