import Modal from "./Modal";
import classes from "./Form.module.css";
import React, { useRef } from "react";

const Form = (props) => {
  const inputRef = useRef();
  const stateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    console.log(document.querySelector("#taskState").value);

    const Task = {
      id: Math.random().toString(),
      title: inputRef.current.value,
      state: document.querySelector("#taskState").value,
    };
    props.addTask(Task);
    props.onHideCart();
  };

  return (
    <Modal onClose={props.onHideCart}>
      <form onSubmit={submitHandler}>
        <h1>Add TODO</h1>
        <label>Title</label>
        <input
          className={classes.input_types}
          type="text"
          ref={inputRef}
        ></input>
        <label>Status</label>
        <select id="taskState" className={classes.input_types} ref={stateRef}>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
        <div>
          <button type="submit">Add Task</button>
          <button type="button" onClick={props.onHideCart}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
