import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ICanvas, ItemTypes, ProjectView } from "../../types";
import Switcher from "../switcher/switcher";
import Component from "../toolbox/component/component";
import Node from "../toolbox/node/node";
import styles from "./canvas.module.scss";

function Canvas(props: ICanvas) {
  const [projectView, setProjectView] = useState(ProjectView.components);
  const [isNodeSelected, setIsNodeSelected] = useState(false);
  const [isServiceSelected, setIsServiceSelected] = useState(false);

  const toggleServiceSelected = () => {
    setIsServiceSelected((current) => !current);
  };

  const handleNodeClickOutside = () => {
    setIsServiceSelected(false);
    setIsNodeSelected(false);
  };

  const toggleProjectView = () => {
    if (projectView === ProjectView.components) {
      setProjectView(ProjectView.deployment);
    } else {
      setProjectView(ProjectView.components);
    }
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ITEM,
      drop: () => setShowService(true),
      collect: (monitor) => ({
        isOver: monitor.isOver()
      })
    }),
    []
  );

  const [showService, setShowService] = useState(false);

  return (
    <div className={styles.canvas} ref={drop}>
      <Switcher view={projectView} toggleAction={toggleProjectView} />
      {projectView === ProjectView.components ? (
        showService ? (
          <div
            className={styles.canvas__service}
            onClick={() => setIsServiceSelected(true)}
          >
            <Component
              isSelected={isServiceSelected}
              onClickOutside={toggleServiceSelected}
            />
          </div>
        ) : null
      ) : (
        <Node
          isSelected={isNodeSelected}
          isServiceSelected={isServiceSelected}
          onClickOutside={handleNodeClickOutside}
          onNodeClick={() => setIsNodeSelected(true)}
          onServiceClick={() => setIsServiceSelected(true)}
        />
      )}
    </div>
  );
}

export default Canvas;
