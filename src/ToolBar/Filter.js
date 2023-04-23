import classes from "./Filter.module.css";

const Filter = (props) => {
  const getSelectedValue = () => {
    const el = document.getElementById("filter_tool");
    props.getVal(el.options[el.selectedIndex].value);
  };

  return (
    <select
      className={classes.filter_select}
      id="filter_tool"
      onChange={getSelectedValue}
    >
      <option value="All" selected>
        All
      </option>
      <option value="Incomplete">Incomplete</option>
      <option value="Complete">Complete</option>
    </select>
  );
};

export default Filter;
