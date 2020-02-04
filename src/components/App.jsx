import React from 'react';
import Login from './Login';

const isLoggedIn = false;

//check login condition
function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
