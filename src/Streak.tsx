import { Component, createEffect } from "solid-js";
import { Todo, State, Props } from "./CommonTypes";
import styles from "./App.module.css";

let successPhrases: string[] = [
  "Faz tempo que tu não erra, viu? ",
  "Tais se garantindo. Merece até um cuscuz: ",
  "Isso aí, meu garoto! ",
  "Muito bem, é pra botar pocando mermo: ",
  "Já imaginou se por cada dia tu ganhasse um dólar? ",
  "Melhor do que já tá, só se fizer tudo amanhã: ",
  "Ave maria! Sois uma máquina! ",
];

let fewDaysPhrases: string[] = [
  "De grão em grão a galinha enche o bico: ",
  "De gota em gota se fez o mar: ",
  "O hábito faz o monge: ",
  "É devagar que se vai longe: ",
];

let nothingPhrases: string[] = [
  "Antes tarde que nunca: ",
  "É melhor errar do que nunca ter tentado: ",
  "Un mar en calma nunca hizo un marinero experto: ",
];

const Streak: Component<Props> = (props) => {
  return (
    <h2 class={styles.streak}>
      {props.state.days.streak > 0
        ? props.state.days.streak > 7
          ? successPhrases[Math.floor(Math.random() * successPhrases.length)] +
            `${props.state.days.streak} dias consecutivos.`
          : fewDaysPhrases[Math.floor(Math.random() * fewDaysPhrases.length)] +
            `${props.state.days.streak} ${
              props.state.days.streak === 1 ? "dia" : "dias consecutivos"
            }.`
        : nothingPhrases[Math.floor(Math.random() * nothingPhrases.length)] +
          `${props.state.days.streak} dias consecutivos.`}
    </h2>
  );
};

export default Streak;
