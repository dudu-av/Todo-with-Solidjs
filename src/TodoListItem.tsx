import type { Component } from "solid-js";
import { Todo, Props } from "./CommonTypes";
import DeleteTodoItem from "./DeleteTodoItem";
import styles from "./App.module.css";

const TodoListItem: Component<Props> = (props) => {
  let todo: Todo = props.state.todos[props.index!];
  let checkDate: boolean = false;
  let change: boolean = false;

  const markComplete = () => {
    let today: string = new Date().toLocaleDateString();
    props.setState("todos", props.index!, "complete", (c: boolean) => !c);

    if (
      props.state.todos.filter((todo) => todo.complete).length ===
      props.state.todos.length
    )
      checkDate = true;

    if (checkDate) {
      checkDate = false;
      change = today !== props.state.days.date;
    }

    if (change) {
      change = false;
      props.setState("days", {
        streak: props.state.days.streak + 1,
        date: today,
      });
    }
  };

  return (
    <li
      class={styles.item}
      style={{
        color: todo.complete ? "grey" : "black",
      }}
    >
      <label class={styles.itemLabel}>
        {props.state.todos[props.index!].task}
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            markComplete();
          }}
        />
        <span class={styles.checkbox} />
        {
          <DeleteTodoItem
            index={props.index}
            state={props.state}
            setState={props.setState}
          />
        }
      </label>
    </li>
  );
};

export default TodoListItem;
