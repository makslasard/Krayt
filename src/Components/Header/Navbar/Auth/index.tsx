import React from 'react';

import Login from './Login';
import Registration from './Registration';

import separator from '../../../../assets/img/separator.svg';

import styles from './Auth.modules.scss';

const Auth: React.FC = () => {
  return (
    <div className={styles.container}>
      <Login />
      <img src={separator} alt="separator" />
      <Registration />
    </div>
  );
};

export default Auth;
