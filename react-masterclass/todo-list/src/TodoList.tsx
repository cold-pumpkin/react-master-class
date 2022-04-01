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
  // register : onChange, onBlur .. 등 사용 가능
  // watch : 입력값 변경내역 추적
  // handleSubmit : validation 정상/비정상 시 동작하는 함수
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onValid = (data: any) => {
    console.log(data);
  }

  return <div>
    <form 
      style={ {display: "flex", flexDirection: "column"} }
      onSubmit={handleSubmit(onValid)}
    >
      {/* HTML의 required 프로퍼티 사용할 수 있지만, 사용자가 직접 소스코드 수정하거나, 지원하지 않는 브라우저일 수도 있음 */}
      {/* 값을 넣지 않았으면 react hook form이 해당 필드로 커서를 옮겨줌 */}
      <input 
        {...register("email", {
          required: "write here!", 
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed"
          },
        })} 
        placeholder="Email" 
      />
      <span>{errors?.email?.message}</span>
      <input 
        {...register("firstName", {
          required: "write here!", minLength: 1
        })} 
        placeholder="First Name" 
      />
      <span>{errors?.firstName?.message}</span>
      <input 
        {...register("lastName", {
          required: "write here!", minLength: 1
        })} 
        placeholder="Last Name" 
      />
      <span>{errors?.lastName?.message}</span>
      <input 
        {...register("password", {
          required: "Password is required", 
          minLength: {
            value: 5,
            message: "Password is too short!"
          }
        })} 
        placeholder="Pasword" 
      />
      <span>{errors?.password?.message}</span>
      <button>Add</button>
    </form>
  </div>;
}
export default TodoList; 