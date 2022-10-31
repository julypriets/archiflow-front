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
  small = "small"
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  disabled = "disabled",
  warning = "warning"
}

export interface ISidebar {
  view: ProjectView;
}

export enum ProjectView {
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

export interface ISwitcher {
  view: ProjectView;
  toggleAction: () => void;
}

export enum ItemTypes {
  ITEM = "item"
}

export interface ICanvas {

}

export interface IService {
  onClickOutside: () => void;
  isSelected: boolean
}

export interface INode {
  isSelected: boolean;
  isServiceSelected: boolean;
  onClickOutside: () => void;
  onNodeClick: () => void;
  onServiceClick: () => void;
}