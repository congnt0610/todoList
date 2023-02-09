import moment from "moment";
import TodoInputs from "../TodoInputs/TodoInputs";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { checkTodoThunk } from "../../../redux/thunk";
import "./TodoItem.css";
import { IsTodo } from "../../../Types/type";
import { deleteTodoThunk } from "../../../redux/thunk";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoItems({ todoList }: any) {
  const [Modal, setModal] = useState(false);
  const [isDeadlineNear, setIsDeadlineNear] = useState("");
  // const [checked, setChecked] = useState(todoList.isCompleted);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    let val = Modal;
    setModal(!val);
  };

  const onClickToClose = () => {
    let val = Modal;
    setModal(!val);
  };

  const deleteTodos = (todoList: any) => {
    dispatch<any>(deleteTodoThunk(todoList.id));
  };

  const checkTodos = (todoList: IsTodo) => {
    dispatch<any>(checkTodoThunk(todoList));
    // const newTodos = {...todoList}
    // newTodos.isCompleted = !newTodos.isCompleted
    // dispatch<any>(checkTodoThunk(newTodos));
    // setChecked(newTodos.isCompleted);
  };

  useEffect(() => {
    const now = new Date();
    const deadline = new Date(todoList?.deadline);
    const a = deadline.getTime() - now.getTime();
    if (a < 1000 * 60 * 60 && a > 0) {
      setIsDeadlineNear("Near");
    } else if (a < 0) {
      setIsDeadlineNear("Late");
    } else {
      setIsDeadlineNear("Far");
    }
  }, [todoList]);

  // const checkDeadline = (todoList: any) => {
  //   if(todoList.deadline){
  //     const now = new Date();
  //     const deadline = new Date(todoList?.deadline)
  //     const a = deadline.getTime() - now.getTime();
  //     return a < 60 * 60 * 1000;
  //   }
  //   return false
  // }

  return (
    <div>
      <div className="todoListModal">
        <div className="leftBtn">
          {/* <input
            style={{ width: "30px", height: "30px" }}
            type="checkbox"
            className="checkbox"
            onClick={() => checkTodos(todoList)}
          /> */}
        </div>
        <div className="todoItem">
          <div>
            <div
              className={todoList.isCompleted ? "done" : "undone"}
              onClick={() => checkTodos(todoList)}
            >
              {todoList.name}
            </div>

            {todoList.deadline && (
              <div
                className={
                  !todoList.isCompleted
                    ? isDeadlineNear === "Near"
                      ? "nearDeadline deadline"
                      : isDeadlineNear === "Late"
                      ? "lateDeadline deadline"
                      : "deadline "
                    : "deadline1"
                }
              >
                Deadline:{" "}
                {moment(todoList.deadline).format("DD/MM/YYYY, h:mm a")}
                {!todoList.isCompleted ? (
                  isDeadlineNear === "Near" ? (
                    <div className="nearNoti">Near</div>
                  ) : isDeadlineNear === "Late" ? (
                    <div className="lateNoti">Late</div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="rightBtn hide">
          <EditIcon
            className="edit"
            fontSize="large"
            onClick={handleEditTodo}
          ></EditIcon>

          <DeleteIcon
            className="delete"
            fontSize="large"
            onClick={() => {
              const confirm = window.confirm(
                "Are you sure you want to delete?"
              );
              if (confirm) return deleteTodos(todoList);
            }}
            // onClick={() => deleteTodos(todoList)}
          ></DeleteIcon>
        </div>
      </div>

      {Modal && (
        <TodoInputs
          onClickToClose={onClickToClose}
          btnValue={"Edit Todo"}
          todoList={todoList}
        />
      )}
    </div>
  );
}

export default TodoItems;
