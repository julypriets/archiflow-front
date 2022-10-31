import React, { Fragment } from 'react';
import MainHeader from '../../components/layout/main-header';
import Sidebar from '../../components/layout/sidebar';

function Project() {
  return (
    <Fragment>
      <MainHeader />
      <div>
        <Sidebar mode="toolbox" />
      </div>
    </Fragment>
  );
}

export default Project;