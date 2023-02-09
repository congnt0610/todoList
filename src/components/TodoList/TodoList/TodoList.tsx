import TodoItem from "../TodoItems/TodoItem";
import { useSelector } from "react-redux";
import { IsTodo, IsState } from "../../../Types/type";
import "./TodoList.css";

const TodoList= () => {
  const todos = useSelector((state: IsState) => state.todoList);
  const todoFilter = useSelector((state: IsState) => state.todoListFilter);

  const getTodos = () => {
    console.log(todoFilter)
    switch(todoFilter){
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo: any) => todo.isCompleted === false)
      case "Completed":
        return todos.filter((todo: any) => todo.isCompleted === true)
      default: return todos;
    }
  }
  
  return (
    <div className="todoList">
      {todos.length === 0 ? (
        <div className="noTodo">
          <p>Add todo now!!!</p>
        </div>
      ) : (
        // <div></div>
        getTodos()
          .map((todoList: IsTodo) => <TodoItem todoList={todoList}/>)
          .reverse()
      )}
      {/* {getTodos()
        .map((todoList: IsTodo) => <TodoItem todoList={todoList} />)
        .reverse()} */}
    </div>
  );
};

export default TodoList;
