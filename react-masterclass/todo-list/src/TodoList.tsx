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
interface IForm {
  email: string
  firstName: string
  lastName: string
  password: string
  password1: string
  extraError?: string
}

function TodoList() {
  // register : onChange, onBlur .. 등 사용 가능
  // watch : 입력값 변경내역 추적
  // handleSubmit : validation 정상/비정상 시 동작하는 함수
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError
  } = useForm<IForm>({
    defaultValues: {  // 초기값
      email: "@naver.com"
    }
  });
  
  const onValid = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password1) {
      setError(
        "password1", 
        { message: "Password are not the same!" },
        { shouldFocus: true }   // Error 발생된 곳으로 Focus 이동
      );
    }
    // setError("extraError", { message: "Server offline."});
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
          validate: {
            noHo: (value) => value.includes("ho") ? "No 'ho' allowed." : true,
            noPark: (value) => value.includes("park") ? "No 'park' allowed." : true,
            // async로 서버 호출한 값을 validation 할 수도 있음
          }
        })} 
        placeholder="Email" 
      />
      <span>{errors?.email?.message}</span>
      <input 
        {...register("firstName", {
          required: "write here!", 
          minLength: 1,
          validate: (value) => value.includes("ho") ? "No 'ho' allowed." : true   
          // ho를 포함하지 않으면 validate 통과, 포함하면 에러 메시지 리턴
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
        placeholder="Password" 
      />
      <span>{errors?.password?.message}</span>
      <input 
        {...register("password1", {
          required: "Password is required", 
          minLength: {
            value: 5,
            message: "Password is too short!"
          }
        })} 
        placeholder="Password1" 
      />
      <span>{errors?.password1?.message}</span>
      <button>Add</button>
      <span>{errors?.extraError?.message}</span>
      {/* ?가 붙어있으면 undefined인 경우 수행을 끝냄 */}
    </form>
  </div>;
}
export default TodoList; 