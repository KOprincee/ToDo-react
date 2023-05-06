import React, { useState } from "react";
import Title from "./Header/Title";
import ToolBar from "./ToolBar/ToolBar";
import Form from "./Modal/Form";
import Lists from "./Lists/Lists";

const todoData = [];

const App = () => {
  const [modalState, setModalState] = useState(false);
  const [taskState, setNewTask] = useState(todoData);
  const [filterState, setfilterState] = useState(todoData);

  const AddNewTask = (newTask) => {
    setNewTask((oldTask) => {
      return [newTask, ...oldTask];
    });

    setfilterState((oldTask) => {
      return [newTask, ...oldTask];
    });
  };

  const showModalHandler = () => {
    setModalState(true);
  };

  const hideModalHandler = () => {
    setModalState(false);
  };

  const getFilter = (filter) => {
    if (filter === "All") setfilterState(taskState);
    else setfilterState(taskState.filter((el) => el.state === filter));
  };

  const changeTaskData = (id, state, title) => {
    setNewTask(taskState.filter((el) => el.id !== id));
    setfilterState(taskState.filter((el) => el.id !== id));

    const Task = {
      id: id,
      title: title,
      state: state,
    };

    AddNewTask(Task);
  };

  const deleteList = (id) => {
    setNewTask(taskState.filter((el) => el.id !== id));
    setfilterState(taskState.filter((el) => el.id !== id));
  };

  return (
    <React.Fragment>
      {modalState && (
        <Form
          addTask={AddNewTask}
          onClose={hideModalHandler}
          onHideCart={hideModalHandler}
        />
      )}
      <Title></Title>
      <ToolBar onShowModal={showModalHandler} sendFilter={getFilter}></ToolBar>
      <Lists
        items={filterState}
        changeTaskList={changeTaskData}
        deleteList={deleteList}
      ></Lists>
    </React.Fragment>
  );
};

export default App;
