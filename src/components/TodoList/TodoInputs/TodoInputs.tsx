import React, { useState, useEffect } from "react";
import { addTodoThunk, updateTodoThunk } from "../../../redux/thunk";
import { useDispatch } from "react-redux";
import "./TodoInputs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IsTodo } from "../../../Types/type";
// import { IsState } from "../../../redux/store";
// import { useRef } from 'react'

interface IProps {
  onClickToClose: () => void;
  btnValue: string;
  todoList?: IsTodo;
}

const TodoInput = ({ onClickToClose, btnValue, todoList }: IProps) => {

  // const inputEl = useRef(null);

  const [todo, setTodo] = useState("");
  const [datetime, setDatetime] = useState("");
  const dispatch = useDispatch();
  // const todos = useSelector((state: IsState) => state.todoList);

  useEffect(() => {
    if (todoList !== undefined) {
      setTodo(todoList.name);
      setDatetime(todoList.deadline);
    }
  }, [todoList]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const val = event.target.value;
  //   // if (val.trim() !== "" || val !== "") {
  //   //   setTodo(val);
  //   setTodo(val);
  //   // }
  // };

  const SaveAndClose = () => {
    onClickedToSave();
    if (todo.trim() !== "" || todo !== "") {
      // inputEl.current.focus()
      onClickToClose();
    } else {
      toast.warn("Không được để trống", { autoClose: 2000 });
    }
  };

  const onClickedToSave = () => {
    if (todoList === undefined) {
      if (todo.trim() !== "" || todo !== "") {
        dispatch<any>(
          addTodoThunk({
            id: Math.floor(Math.random() * 100),
            name: todo,
            isCompleted: false,
            deadline: datetime,
          })
        );
      }
    } else if(todo.trim() !== "" || todo !== ""){
      dispatch<any>(
        updateTodoThunk({
          id: todoList.id,
          name: todo,
          isCompleted: true,
          deadline: datetime,
        })
      );
    }
    // setTodo("");
    // setDatetime("");
  };

  const setDateTimeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatetime(e.target.value);
  };
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   SaveAndClose();
  // }

  // const Todo = () => {
  //   const validate = Yup.object({
  //     inputTodo: Yup.string()
  //       .required('Required'),
  //   })
  // }

  return (
    // <Formik
    //   initialValues={{
    //     inputTodo: "",
    //   }}
    //   validationSchema={validate}
    //   onSubmit={(values) => {
    //     console.log(values);
    //   }}
    // >
    //   {formik => (
      <div className="inputBoxShadow">
        <div className="inputBox container">
          <div className="inputBoxTodos">
            <h3>{btnValue}</h3>
            <input
              className="inputTodo"
              placeholder="Todo Name ..."
              name="inputTodo"
              onChange={(e) => setTodo(e.target.value)}
              required 
              type="text"
              value={todo}
            ></input>
            <input
              className="inputTodo"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDateTimeTodo(e)
              }
              required
              // onChange={(e) => setDatetime(e.target.value)}
              type="datetime-local"
              value={datetime}
            ></input>
          </div>
          <div className="inputBoxButton">
            <button className="btn btn_add" onClick={SaveAndClose}>
              {btnValue}
            </button>
            <button
              className="btn btn_cancel"
              type="button"
              onClick={onClickToClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoInput;
