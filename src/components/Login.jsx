import React from 'react';
import Input from './Input';

const Login = ({ props }) => {
  //console.log(backgroundColors);
  return (
    <form className="form" style={{ backgroundColor: props }}>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
