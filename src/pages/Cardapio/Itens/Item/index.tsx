import React from 'react';
import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';

export default function Item(props: Prato) {
  const { title, description, photo } = props;
  return (
    <div className={styles.tags}>
      <div className={styles.imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.descricao}>
        <div className={styles.titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}
