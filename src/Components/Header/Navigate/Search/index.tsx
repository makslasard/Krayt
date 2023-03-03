import React from 'react';

import separatorSearch from '../../../../assets/img/separatorSearch.svg';
import search from '../../../../assets/img/search.svg';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={separatorSearch} alt="separatorSearch" />
      <img src={search} alt="search" />
      <input type="text" placeholder="Поиск по сайту" />
    </div>
  );
};

export default Search;
