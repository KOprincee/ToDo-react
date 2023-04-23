import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import classes from "./ListCard.module.css";
import { useState } from "react";

const ListCard = (props) => {
  const isDone = props.state === "Complete";
  const [checked, setChecked] = useState(isDone);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const stateChange = props.state === "Complete" ? "Incomplete" : "Complete";
    props.setState(props.id, stateChange, props.title);
  };

  const deleteList = () => {
    props.deleteList(props.id);
  };

  return (
    <div className={classes.ListCard}>
      <div className={classes.todo_details}>
        <div>
          <span className={classes.check}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </span>
          <span className={`${checked && classes.done_task}`}>
            {props.title}
          </span>
        </div>
      </div>
      <div>
        <span className={classes.delete} onClick={deleteList}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default ListCard;
