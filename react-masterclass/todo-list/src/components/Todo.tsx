import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  
  // 카테고리 변경 버튼
  const onClick = (category: ITodo["category"]) => {
    console.log("new category :", category);
    
    setTodos(oldTodos => {
      // findIndex : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
      const targetIndex = oldTodos.findIndex(todo => todo.id === id);
      const newTodo = { text, id, category};
      
      return [
        ...oldTodos.slice(0, targetIndex), 
        newTodo,
        ...oldTodos.slice(targetIndex + 1)
      ];
    });
  }

  /* 현재 카테고리에 해당되지 않는 버튼만 보여주기 v2.
  const onClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  }
  */
  

  return (
    <li>
      <span>{text}</span>
      {/* 현재 카테고리에 해당되지 않는 버튼만 보여주기 v1. */}
      {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
      {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}

      {/* 현재 카테고리에 해당되지 않는 버튼만 보여주기 v2. */}
      {/* {category !== "DONE" && (
        <button name="DONE" onClick={onClick2}>
          Done
        </button>
      )} */}
    </li>
  );
}

export default Todo;