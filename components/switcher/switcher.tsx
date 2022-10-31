import React from "react";
import { ProjectView, ISwitcher } from "../../types";
import styles from "./switcher.module.scss";

function Switcher(props: ISwitcher) {
  const { view } = props;

  return (
    <div className={styles.switcher}>
      <p
        className={
          view === ProjectView.components
            ? styles.switcher__item__active
            : styles.switcher__item
        }
      >
        Components
      </p>
      <p
        className={
          view === ProjectView.deployment
            ? styles.switcher__item__active
            : styles.switcher__item
        }
      >
        Deployment
      </p>
    </div>
  );
}

export default Switcher;
