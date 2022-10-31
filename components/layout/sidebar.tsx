import React, { Fragment } from "react";
import { IItem, ISidebar, ProjectView } from "../../types";
import DbIcon from "../icons/db-icon";
import EmailIcon from "../icons/email-icon";
import SettingsIcon from "../icons/settings-icon";
import ItemList from "../toolbox/items/item-list";
import styles from "./sidebar.module.scss";

function Sidebar(props: ISidebar) {
  const items: IItem[] = [
    { name: "Service", icon: <SettingsIcon /> },
    { name: "Database", icon: <DbIcon /> },
    { name: "Broker", icon: <EmailIcon /> }
  ];

  const content =
    props.view === ProjectView.components ? (
      <Fragment>
        <div className={styles.sidebar__section}>
          <h1 className="heading">Toolbox</h1>
          <p>Click and drag a block to the canvas to build a diagram.</p>
        </div>
        <div className={styles.sidebar__section}>
          <h2 className="subheading-2">Components</h2>
          <ItemList items={items} />
        </div>
      </Fragment>
    ) : (
      <div></div>
    );

  return <div className={styles.sidebar}>{content}</div>;
}

export default Sidebar;
