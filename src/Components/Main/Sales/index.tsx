import React from 'react';
import Card from './Card';
import Filter from './Filter';

import styles from './Sales.module.scss';
import SpecialOffer from './SpecialOffers';

const Sales = () => {
  return (
    <div className={styles.container}>
      <h2>Распродажа</h2>
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.card}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.specialOffer}>
        <SpecialOffer />
        <SpecialOffer />
        <SpecialOffer />
      </div>
    </div>
  );
};

export default Sales;
