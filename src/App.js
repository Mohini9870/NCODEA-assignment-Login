import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
export default function App() {
  return (
    <div className="App">
     <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}
