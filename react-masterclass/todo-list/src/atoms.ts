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

// 카테고리 state
export const categoryState = atom({
  key: "category",
  default: "TO_DO"
})

// selector : atom의 output을 변형
export const todoSelector = selector({
  key: "todoSelector",
  get: ({get}) => {   // options 객체 안의 get 함수
    const todos = get(todoState);   // selector 내부로 atom을 가져옴
    const category = get(categoryState);

    return todos.filter(todo => todo.category === category);
  }
});