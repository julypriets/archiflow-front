import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Canvas from "../../components/canvas/canvas";
import MainHeader from '../../components/layout/main-header';
import Sidebar from '../../components/layout/sidebar';
import { ProjectView } from "../../types";
import styles from "./project.module.scss";

function Project() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MainHeader />
      <div className={styles.container}>
        <Sidebar view={ProjectView.components} />
        <Canvas />
      </div>
    </DndProvider>
  );
}

export default Project;