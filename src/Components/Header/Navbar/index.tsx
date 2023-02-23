import React from 'react';

import Basket from './Basket';
import Cities from './Cities';
import Favourites from './Favourites';
import Login from './Login';
import Phone from './Phones';
import Registration from './Registration';
import Statistics from './Statistics';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Cities />
      <Phone />
      <Login />
      <Registration />
      <Favourites />
      <Statistics />
      <Basket />
    </div>
  );
};

export default Navbar;
