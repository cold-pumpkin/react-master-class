import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);

  const { 
    register, 
    handleSubmit, 
    setValue
  } = useForm<IForm>();

  const handleValid = ({todo}: IForm) => {
    console.log("add todo : ", todo);
    setTodos((oldToDos) => [
      { text: todo, id: Date.now(), category: category },   // 현재 선택된 카테고리로 만들어짐
      ...oldToDos,
    ]);
    setValue("todo", "");
  };


  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;