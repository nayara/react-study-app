import React from 'react';
import { HomeStrings } from './constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>{HomeStrings.welcome}</h1>
      <Link to="/login">{HomeStrings.wantLogin}</Link>
    </>
  );
};

export default Home;
