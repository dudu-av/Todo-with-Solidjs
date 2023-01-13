import { Component, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { Todo, State, Props } from "./CommonTypes";
import TodoListItem from "./TodoListItem";
import NewTodoItem from "./NewTodoItem";
import Streak from "./Streak";
import styles from "./App.module.css";

let debug: boolean = false;

let name: string = "Duda";
let greetings: string[] = [
  "Oi",
  "Simbora, meu parceiro",
  "É hoje que tudo vai dar certo, ",
  "Vamo lá, meu abençoado",
  "Mermão, já era, pai",
];

const range = (n: Number) => [...Array(n).keys()];

const App: Component = () => {
  const [state, setState] = createStore<State>({
    days: { streak: 0, date: "" },
    todos: [
      { task: "Meu app", complete: false },
      { task: "Duolingo", complete: false },
      { task: "Scala", complete: false },
      { task: "Elixir", complete: false },
      { task: "MongoDB", complete: false },
      { task: "SQL", complete: false },
      { task: "Húngaro", complete: false },
      { task: "Grafos", complete: false },
    ],
  });

  if (debug)
    createEffect(() =>
      console.log(
        JSON.stringify(state).replace(",", ",\n").replaceAll("{", "\n{")
      )
    );

  let counter = 0;

  return (
    <div class={styles.main}>
      <h1>
        {greetings[Math.floor(Math.random() * greetings.length)]} {name}!
      </h1>
      <Streak state={state} setState={setState} />
      <ul class={styles.itemList}>
        <For each={range(state.todos.length)}>
          {(index: number) => (
            <div>
              <TodoListItem index={index} state={state} setState={setState} />
            </div>
          )}
        </For>
      </ul>
      <NewTodoItem state={state} setState={setState} />
    </div>
  );
};

export default App;
