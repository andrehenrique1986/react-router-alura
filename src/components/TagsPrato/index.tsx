import React from 'react';
import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

const TagsPrato = ({ category, size, serving, price }: Prato) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__porcao}>
        {serving} 2 pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
};

export default TagsPrato;
