import { useState } from "react";
import Style from "./inputContainer.module.css";

const InputContainer = ({ onNewItem }) => {
  const [TodoName, setTodoName] = useState("");
  const [Tododate, setTodoDate] = useState("");

  const handleOnchange = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnDatechange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnclickButton = () => {
    onNewItem(TodoName, Tododate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className={Style.Container}>
      <input
        type="text"
        className={Style.InputContainer}
        value={TodoName}
        placeholder="Enter ToDo here"
        onChange={handleOnchange}
      />
      <input
        type="date"
        className={Style.dateContainer}
        value={Tododate}
        onChange={handleOnDatechange}
      />
      <button
        className={`btn btn-success ${Style.button}`}
        onClick={handleOnclickButton}
      >
        Add
      </button>
    </div>
  );
};

export default InputContainer;
