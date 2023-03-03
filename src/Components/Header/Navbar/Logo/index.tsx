import React from 'react';

import logo from '../../../../assets/img/logo.svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
