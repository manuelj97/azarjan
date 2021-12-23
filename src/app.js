import { BrowserRouter as Router} from "react-router-dom"
import { AboutMe, FrontPage, Contact } from "./pages";
import styled from "styled-components";


export default function App() {
  return (
    <Router>
      <Column>
        <FrontPage />
        <AboutMe />
        <Contact />
      </Column>
    </Router>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vw;
`
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import "./styles/utils.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
