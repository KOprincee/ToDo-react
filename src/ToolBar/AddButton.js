import classes from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button className={classes.addButton} onClick={props.onToolClick}>
      {props.name}
    </button>
  );
};

export default AddButton;
