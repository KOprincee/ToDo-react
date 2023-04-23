import classes from "./List.module.css";
import ListCard from "./ListCard";

const Lists = (props) => {
  const setState = (id, state, title) => {
    props.changeTaskList(id, state, title);
  };

  const deleteList = (id) => {
    props.deleteList(id);
  };

  return (
    <div className={classes.main_div}>
      {props.items.length === 0 ? (
        <p className={classes.data}>No data</p>
      ) : (
        props.items.map((tasks) => (
          <ListCard
            setState={setState}
            key={tasks.id}
            id={tasks.id}
            title={tasks.title}
            state={tasks.state}
            deleteList={deleteList}
          />
        ))
      )}
    </div>
  );
};

export default Lists;
