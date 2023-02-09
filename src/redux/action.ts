import {IsTodo, IsFilter} from "../Types/type"
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODO = "SET_TODO";
export const GET_TODO = "GET_TODO";
export const SET_FILTER = "SET_FILTER";
export const SET_FILTER_COM = "SET_FILTER_COM";
export const SET_FILTER_ACT = "SET_FILTER_ACT";
export const SET_FILTER_STATUS = "SET_FILTER_STATUS"

export const addTodo = (todo: IsTodo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const checkTodo = (id: number) => {
  return {
    type: CHECK_TODO,
    payload: id,
  };
};

export const editTodo = (id: number) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (todo: IsTodo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const setTodo = (todo: IsTodo[]) => {
  return {
    type: SET_TODO,
    payload: todo,
  };
};

export const setFilter = (filter: IsFilter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const setFilterCom = (todo: IsFilter) => {
  return {
    type: SET_FILTER_COM,
    payload: todo,
  };
};

export const setFilterStatus = (todo: string) => {
  return{
    type: SET_FILTER_STATUS,
    payload: todo,
  }
}
export const setFilterAct = (filter: IsFilter) => {
  return {
    type: SET_FILTER_ACT,
    payload: filter,
  };
};

export const getTodo = (data: any) => (dispatch: any) => {
  const todos = data;
  let newTodos = [];
  for (let todo of todos) {
    newTodos.unshift(todo);
  }
  newTodos.reverse();
  dispatch(setTodo(newTodos));
};
