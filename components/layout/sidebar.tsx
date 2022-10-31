import React, { Fragment } from 'react';
import styles from './sidebar.module.scss';
import ItemList from '../items/item-list';

// TODO: remove any type
function Sidebar(props: any) {
  const items = [
    { name: "Service" },
    { name: "Database" },
    { name: "Broker" }
  ]

  const content = props.mode === "toolbox" ?
    (<Fragment>
      <div className={styles.sidebar__section}>
        <h1 className="heading">Toolbox</h1>
        <p>Click and drag a block to the canvas to build a diagram.</p>
      </div>
      <div className={styles.sidebar__section}>
        <h2 className="subheading-2">Components</h2>
        <ItemList items={items}/>
      </div>

    </Fragment>)
    : (<div></div>)


  return (
    <div className={styles.sidebar}>
      {content}
    </div>
  );
}

export default Sidebar;