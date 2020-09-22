import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="appContainer">
        <Header />
        <Content />
    </div>
  );
}

export default App;
