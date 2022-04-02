import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState)
  const { 
    register, 
    handleSubmit, 
    setValue
  } = useForm<IForm>();

  const handleValid = ({todo}: IForm) => {
    console.log("add todo : ", todo);
    setTodos((oldToDos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
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