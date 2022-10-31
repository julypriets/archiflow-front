import React, { useEffect, useRef } from "react";
import { INode } from "../../../types";
import styles from "./node.module.scss";

function Node(props: INode) {
  const { isSelected, isServiceSelected, onServiceClick, onNodeClick, onClickOutside } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref} onClick={onNodeClick} className={styles.node}>
      <p>Instance</p>
      <div className={styles.node__services}>
        <div ref={ref} onClick={onServiceClick} className={isServiceSelected ? styles.node__service__selected : styles.node__service}>
          <div className={styles.node__service__rectangle__top}></div>
          <div className={styles.node__service__rectangle__bottom}></div>
          <p>Service A</p>
        </div>
      </div>
    </div>
  );
}

export default Node;
