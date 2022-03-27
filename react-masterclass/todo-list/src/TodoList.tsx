import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  // register : onChange, onBlur .. 등 사용 가ㅇ
  // watch : 입력값 변경내역 추적
  const { register, watch } = useForm();  

  return <div>
    <form >
      <input {...register("Email")} placeholder="Write a todo" />
      <button>Add</button>
    </form>
  </div>;
}
export default TodoList; 