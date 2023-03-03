import React from 'react';

import heart from '../../../../../assets/img/heart.svg';

import styles from './Favourites.module.scss';

const Favourites = () => {
  return (
    <div className={styles.container}>
      <img src={heart} alt="heart" />
    </div>
  );
};

export default Favourites;
