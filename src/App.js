import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dynamictime from './component/dynamictime';
import './component/dynam.css';


const milSeconds=9850365

function App() {
  return (
    <div className="App">
     <Dynamictime totalmilSeconds={milSeconds} />
    </div>
  );
}

export default App;
