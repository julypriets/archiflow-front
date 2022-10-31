import React, { useEffect, useRef } from 'react';
import { IService } from "../../../types";
import styles from "./component.module.scss";

function Component(props: IService) {
  const { onClickOutside } = props;
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
    <div className={styles.service}>
      Service
    </div>
  );
}

export default Component;