import React from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="/">Каталог</a>
        </li>
        <li>
          <a href="/">Акции</a>
        </li>
        <li>
          <a href="/">Бренды</a>
        </li>
        <li>
          <a href="/">Магазин</a>
        </li>
        <li>
          <a href="/">О нас</a>
        </li>
        <li>
          <a href="/">Доставка и оплата</a>
        </li>
        <li>
          <a href="/">Статьи</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
