import React from 'react';
import styles from './item-list.module.scss';
import Item from './item';

export interface IItem {
  name: string;
}

function ItemList(props: any) {
  return (
    <div className={styles.item_list}>
      {props.items.map((item: IItem) => {
        return (
          <Item key={item.name} item={item}/>
        );
      })}
    </div>
  );
}

export default ItemList;