import React from 'react';

import Login from './Login';
import Registration from './Registration';

import separator from '../../../../assets/img/separator.svg';

import styles from './Authorization.module.scss';

const Authorization: React.FC = () => {
  return (
    <div className={styles.container}>
      <Login />
      <img src={separator} alt="separator" />
      <Registration />
    </div>
  );
};

export default Authorization;
