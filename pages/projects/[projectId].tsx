import React, { Fragment } from 'react';
import MainHeader from '../../components/layout/main-header';
import Sidebar from '../../components/layout/sidebar';
import { ISidebarMode } from "../../types";

function Project() {
  return (
    <Fragment>
      <MainHeader />
      <div>
        <Sidebar mode={ISidebarMode.components} />
      </div>
    </Fragment>
  );
}

export default Project;