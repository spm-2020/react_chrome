import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Breadcrumb>
    <Breadcrumb.Item>sample</Breadcrumb.Item>
  </Breadcrumb>
      <p>Welcome to chrome extension</p>
      <UpOutlined />
    </div>
  );
}

export default App;
