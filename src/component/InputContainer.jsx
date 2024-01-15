import { useRef } from "react";
import Style from "./inputContainer.module.css";

const InputContainer = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleOnclickButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    onNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <form className={Style.Container} onSubmit={handleOnclickButton}>
      <input
        type="text"
        ref={todoNameElement}
        className={Style.InputContainer}
        placeholder="Enter ToDo here"
      />
      <input
        type="date"
        className={Style.dateContainer}
        ref={todoDateElement}
      />
      <button type="submit" className={`btn btn-success ${Style.button}`}>
        Add
      </button>
    </form>
  );
};

export default InputContainer;
