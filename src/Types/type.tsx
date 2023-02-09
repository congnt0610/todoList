export interface IsTodo {
  id: number;
  name: string;
  isCompleted: boolean;
  deadline: string;
}

export enum IsFilter {
  ALL,
  ACTIVE,
  COMPLETE,
}

export interface IsState {
  todoList: IsTodo[];
  todoListFilter: string;
}
