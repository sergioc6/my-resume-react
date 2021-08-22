import React from 'react';
import styles from './App.css';
import Sidebar from './components/Sidebar/';
import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <React.Fragment>
      <Router>
          <Sidebar />
      </Router>
    </React.Fragment>
  );
}