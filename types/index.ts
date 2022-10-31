import { JSXElement } from "@typescript-eslint/types/dist/generated/ast-spec";
import { ReactElement } from "react";

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

export interface ISidebar {
  mode: ISidebarMode
}

export enum ISidebarMode {
  components = "components",
  deployment = "deployment"
}

export interface IItem {
  name: string;
  icon: ReactElement;
}

export interface IItemList {
  items: IItem[];
}