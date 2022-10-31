import classNames from "classnames";
import Link from "next/link";
import { ButtonColor, ButtonType, IButton } from "../../../types";
import styles from "./button.module.scss";

export default function Button(props: IButton) {
  const { children, link, onClick, type, color, disabled } = props;

  const classes = classNames(
    styles[`btn__${type ?? ButtonType.standard}`],
    styles[`btn__${disabled ? `disabled` : color ?? ButtonColor.primary}`]
  );

  if (link) {
    return (
      <Link href={link}>
        <a className={classes}> {children} </a>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
