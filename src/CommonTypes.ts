export type Todo = {
  task: string;
  complete: boolean;
};

type Day = {
  streak: number;
  date: string;
};

export type State = {
  days: Day;
  todos: Array<Todo>;
};

export interface Props {
  index?: number;
  state: State;
  setState: Function;
}
