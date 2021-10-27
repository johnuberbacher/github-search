import React, { useEffect, useContext } from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';
import Container from 'react-bootstrap/Container';
import Body from './components/body';
import Search from './components/search';

class App extends React.Component {
  render() {
    return (
      <div className="App d-flex align-items-start">
        <Container>
          <Body accounts={this.accounts}></Body>
        </Container>
      </div>
    )
  };
}

export default App;
