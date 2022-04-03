import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",  // 지정해주지 않으면 숫자로 표현됨
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;   // 3중 하나로 제한된 경우
}

// recoil atom
export const todoState = atom<ITodo[]>({
  key: "todo",
  default: []
});

// 카테고리 state
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO
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