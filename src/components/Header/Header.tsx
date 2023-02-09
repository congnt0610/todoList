import { useState } from "react";
import TodoInputs from "../TodoList/TodoInputs/TodoInputs";
import "./Header.css";

function Header() {
  const [Modal, setModal] = useState(false);

  const handleAddTodo = () => {
    let val = Modal;
    setModal(!val);
  };

  const onClickToClose = () => {
    let val = Modal;
    setModal(!val);
  };

  return (
    <>
      <div className="todos">
        <h1>Todo App</h1>
        {/* <Button variant="contained" onClick={handleAddTodo} className="add">
          Add Todo
        </Button> */}
        <button onClick={handleAddTodo} className="add">
          Add Todo
        </button>
      </div>
      {/* <hr></hr> */}
      {Modal === true ? (
        <TodoInputs onClickToClose={onClickToClose} btnValue={"Add Todo"} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Header;
