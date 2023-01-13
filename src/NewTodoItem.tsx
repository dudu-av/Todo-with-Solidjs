import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Todo, Props } from "./CommonTypes";
import { FiPlusSquare } from "solid-icons/fi";
import styles from "./App.module.css";

const NewTodoItem: Component<Props> = (props) => {
  const [newTodo, setNewTodo] = createSignal("");

  const addItem = () => {
    props.setState("todos", [
      ...props.state.todos,
      { task: newTodo(), complete: false },
    ]);
  };

  return (
    <form class={styles.addButtonContainer}>
      <input
        class={styles.input}
        style={{ "margin-left": "30px" }}
        value={newTodo()}
        onChange={(e) => {
          setNewTodo((e.target as HTMLTextAreaElement).value);
        }}
      />
      <button
        class={styles.addButton}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addItem();
          setNewTodo("");
        }}
      >
        <FiPlusSquare />
      </button>
    </form>
  );
};

export default NewTodoItem;
