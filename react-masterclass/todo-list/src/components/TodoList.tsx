import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
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
  //const [todos, setTodos] = useRecoilState(todoState);  // useRecoilValue & useSetRecoilState
  const todos = useRecoilValue(todoState);  // 값만 반환, modifier 함수는 반환 x

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;