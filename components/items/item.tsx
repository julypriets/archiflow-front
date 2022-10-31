import React from 'react';
import styles from './item.module.scss';
import Image from 'next/image';

function Item(props: any) {
  const { name } = props.item;

  return (
    <div className={styles.item}>
      {/*<Image src={} />*/}
      <p>{name}</p>
    </div>
  );
}

export default Item;