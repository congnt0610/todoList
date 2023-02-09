import "./App.css";
import { useEffect } from "react";
import TodoList from "./components/TodoList/TodoList/TodoList";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import { useDispatch } from "react-redux";
import { getTodoThunk } from "./redux/thunk";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getTodoThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="todoApp container">
        <ToastContainer />
        <Header />
        <Filter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
