import type { Component } from "solid-js";
import { Todo, Props } from "./CommonTypes";
import styles from "./App.module.css";
import { FiDelete } from "solid-icons/fi";

const DeleteTodoItem: Component<Props> = (props) => {
  const deleteItem = () => {
    props.setState("todos", () =>
      props.state.todos.filter(
        (todo: Todo) => todo !== props.state.todos[props.index!]
      )
    );
  };

  return (
    <button
      class={styles.deleteButton}
      style={{ "margin-left": "10px" }}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        deleteItem();
      }}
    >
      <FiDelete />
    </button>
  );
};

export default DeleteTodoItem;
