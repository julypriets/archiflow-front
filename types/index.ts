export interface IButton {
  children: JSX.Element | JSX.Element[] | string;
  link?: string;
  onClick?: () => void;
  type?: ButtonType;
  color?: ButtonColor;
  disabled?: boolean;
}

export enum ButtonType {
  standard = "standard",
  small = "small",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  disabled = "disabled",
  warning = "warning",
}