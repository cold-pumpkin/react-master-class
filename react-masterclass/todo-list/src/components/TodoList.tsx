import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../atoms";
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
  //const todos = useRecoilValue(todoState);  // 값만 반환, modifier 함수는 반환 x
  const [todos, doings, dones] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <CreateTodo />
      <h2>To Do</h2>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doings.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {dones.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
export default TodoList;