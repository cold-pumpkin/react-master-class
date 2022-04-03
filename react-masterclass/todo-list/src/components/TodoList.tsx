import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector, Categories } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

/*
function TodoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : { value }, } = event;
    setTodo(value);
  };

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todo} placeholder="Write a todo" />
      <button>Add</button>
    </form>
  </div>;
}
*/


function TodoList() {
  // recoil
  // const value = useRecoilValue(todoState);
  // const modfn = useSetRecoilState(todoState);
  // const [todos, setTodos] = useRecoilState(todoState);  // useRecoilValue & useSetRecoilState
  //const todos = useRecoilValue(todoState);  // atom or selector 값만 반환, modifier 함수는 반환 x
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  // 현재 카테고리 state 셋팅
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <select onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {todos?.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>
  );
}
export default TodoList;