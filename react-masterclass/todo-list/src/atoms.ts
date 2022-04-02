import { atom } from "recoil";

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