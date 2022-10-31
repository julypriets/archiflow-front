import React, { Fragment } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { IItem, ItemTypes } from "../../../types";
import styles from "./item.module.scss";

function Item(props: IItem) {
  const { name, icon } = props;
  const serviceImgSrc = "@/public/images/service-preview.png";

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.ITEM,
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    []
  );

  return (
    <Fragment>
      <DragPreviewImage connect={preview} src={serviceImgSrc} />
      <div className={styles.item} ref={drag}>
        {icon}
        {name}
      </div>
    </Fragment>
  );
}

export default Item;
