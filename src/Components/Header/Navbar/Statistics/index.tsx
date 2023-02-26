import React from 'react';

import statistics from '../../../../assets/img/statistics.svg';

import styles from './Statistics.modules.scss';

const Statistics = () => {
  return (
    <div className={styles.container}>
      <img src={statistics} alt="statistics" />
    </div>
  );
};

export default Statistics;
