import { toast } from "react-toastify";
import * as actionsAPI from "../axios/todoApi";
import * as actions from "./action";
import { IsTodo } from "../Types/type";

export const getTodoThunk = () => async (dispatch: any) => {
  try {
    const response = await actionsAPI.getTodoAPI();
    dispatch(actions.getTodo(response.data));
  } catch (error) {
    toast.error("Get data fail", { autoClose: 2000 });
  }
};

export const addTodoThunk = (todo: IsTodo) => async (dispatch: any) => {
  try {
    await actionsAPI.addTodoAPI(todo);
    // dispatch(getTodoThunk());
    dispatch(actions.addTodo(todo));
    toast.success("Add success", { autoClose: 2000 });
  } catch (error) {
    // dispatch(getTodoThunk());
    toast.error("Add data fail", { autoClose: 2000 });
  }
};

export const deleteTodoThunk = (id: number) => async (dispatch: any) => {
  try {
    await actionsAPI.deleteTodoAPI(id);
    // dispatch(getTodoThunk());
    dispatch(actions.deleteTodo(id));
    toast.success("Delete success", { autoClose: 2000 });
  } catch (error) {
    // dispatch(getTodoThunk());
    toast.error("Delete data fail", { autoClose: 2000 });
  }
};

export const updateTodoThunk = (todo: IsTodo) => async (dispatch: any) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    // dispatch(getTodoThunk());
    dispatch(actions.updateTodo(todo));
    toast.success("Update success", { autoClose: 2000 });
  } catch (error) {
    console.log(error)
    // dispatch(getTodoThunk());
    toast.error("Update data fail", { autoClose: 2000 });
  }
};

export const checkTodoThunk = (todo: any) => async (dispatch: any) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    // dispatch(getTodoThunk());
    dispatch(actions.checkTodo(todo));
    toast.success("Update success", { autoClose: 2000 });
  } catch (error) {
    // dispatch(getTodoThunk());
    toast.error("Update check data fail", { autoClose: 2000 });
  }
};
