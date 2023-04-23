import React from "react";
import AddButton from "./AddButton";
import Filter from "./Filter";
import classes from "./ToolBar.module.css";

const ToolBar = (props) => {
  const getFilterValue = (val) => {
    props.sendFilter(val);
  };

  return (
    <div className={classes.toolbar}>
      <AddButton name="Add Task" onToolClick={props.onShowModal}></AddButton>
      <Filter getVal={getFilterValue}></Filter>
    </div>
  );
};

export default ToolBar;
