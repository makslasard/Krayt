import React from 'react';

import map from '../../../../assets/img/map.svg';
import arrowDown from '../../../../assets/img/arrowDown.svg';

import styles from './Cities.module.scss';

const Cities: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={map} alt="map" className={styles.map} />
      <p>Санкт-Петербург</p>
      <img src={arrowDown} alt="arrowDown" />
    </div>
  );
};

export default Cities;
