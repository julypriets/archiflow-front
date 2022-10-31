import React from 'react';
import { IItem } from "../../types";
import styles from "./item.module.scss";

function Item(props: IItem) {
  const { name, icon } = props;

  return (
    <div className={styles.item}>
      {icon}
      {name}
    </div>
  );
}

export default Item;