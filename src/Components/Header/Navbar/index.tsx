import React from 'react';

import Basket from './Basket';
import Cities from './Cities';
import Favourites from './Favourites';
import Phone from './Phones';
import Statistics from './Statistics';
import Logo from './Logo';
import Auth from './Auth';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Cities />
      <Phone />
      <Logo />
      <Auth />
      <Favourites />
      <Statistics />
      <Basket />
    </div>
  );
};

export default Navbar;
