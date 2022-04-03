import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";   // 3중 하나로 제한된 경우
}

// recoil atom
export const todoState = atom<ITodo[]>({
  key: "todo",
  default: []
});

// selector : atom의 output을 변형
export const todoSelector = selector({
  key: "todoSelector",
  get: ({get}) => {   // options 객체 안의 get 함수
    const todos = get(todoState);   // selector 내부로 atom을 가져옴
    return [
      todos.filter(todo => todo.category === "TO_DO"),
      todos.filter(todo => todo.category === "DOING"),
      todos.filter(todo => todo.category === "DONE"),
    ];
  }
});