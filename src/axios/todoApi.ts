import axios from "axios";
import {IsTodo} from "../Types/type"

export const axiosInstance = axios.create({
  baseURL: "https://63734ccb348e947299085647.mockapi.io/api",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getTodoAPI = () => {
  return axiosInstance.get(`/todos`);
};

export const addTodoAPI = (todos: IsTodo) => {
  return axiosInstance.post(`/todos`, todos);
};

export const deleteTodoAPI = (id: number) => {
  return axiosInstance.delete(`/todos/${id}`);
};

export const updateTodoAPI = (todo: IsTodo) => {
  return axiosInstance.put(`/todos/${todo.id}`, {
    id: todo.id,
    name: todo.name,
    isCompleted: !todo.isCompleted,
    deadline: todo.deadline,
  });
};
