import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

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
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";   // 3중 하나로 제한된 경우
}

// recoil atom
const todoState = atom<ITodo[]>({
  key: "todo",
  default: []
});

function TodoList() {
  // recoil
  // const value = useRecoilValue(todoState);
  // const modfn = useSetRecoilState(todoState);
  const [todos, setTodos] = useRecoilState(todoState);  // useRecoilValue & useSetRecoilState
  
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
    <div>
      <h1>Todo List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;