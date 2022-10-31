import React from 'react';
import { IItem, IItemList } from "../../types";
import Item from "./item";
import styles from './item-list.module.scss';

function ItemList(props: IItemList) {
  const { items } = props;

  return (
    <div className={styles.item_list}>
      {items.map((item: IItem) => {
        return (
          <Item key={item.name} name={item.name} icon={item.icon}/>
        );
      })}
    </div>
  );
}

export default ItemList;