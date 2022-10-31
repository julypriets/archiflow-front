import React, { useState } from "react";
import { ICanvas, ItemTypes, ProjectView } from "../../types";
import Switcher from "../switcher/switcher";
import Service from "../toolbox/service/service";
import styles from "./canvas.module.scss";
import { useDrop } from "react-dnd";

function Canvas(props: ICanvas) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ITEM,
      drop: () => setShowService(true),
      collect: (monitor) => ({
        isOver: monitor.isOver()
      })
    }),
    []
  );

  const [showService, setShowService] = useState(false);

  return (
    <div className={styles.canvas} ref={drop}>
      <Switcher view={ProjectView.components} />
      {showService ? (
        <div className={styles.canvas__service}>
          <Service />
        </div>
      ) : null}
    </div>
  );
}

export default Canvas;
