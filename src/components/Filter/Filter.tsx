import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFilterStatus } from "../../redux/action";
// import { IsFilter } from "../../redux/store";
import "./Filter.css";

function Filter() {
  const dispatch = useDispatch();
  const todolist = useSelector((state: any) => state.todoList);
  const [filterType, setFilterType] = useState("All");


  // useEffect(() => {
  //   dispatch(setFilterStatus(filterType));
  // }, [filterType]);
  useEffect(() => {
    dispatch(setFilterStatus(filterType));
  });

  return (
    <div>
      <div className="filterBtn">
        <button
          onClick={() => {
            setFilterType("All");
          }}
          className={filterType === "All" ? "btn actbtn" : "btn"}
        >
          All ({todolist.length})
        </button>

        <button
          onClick={() => {
            setFilterType("Active");
          }}
          className={filterType === "Active" ? "btn actbtn" : "btn"}
        >
          Active (
          {todolist.filter((todo: any) => todo.isCompleted === false).length})
        </button>

        <button
          onClick={() => {
            setFilterType("Completed");
          }}
          className={filterType === "Completed" ? "btn actbtn" : "btn"}
        >
          Completed (
          {todolist.filter((todo: any) => todo.isCompleted === true).length})
        </button>
      </div>
      {/* <hr></hr> */}
    </div>
  );
}

export default Filter;
