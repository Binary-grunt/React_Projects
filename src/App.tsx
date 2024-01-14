import './App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {AddTodoForm} from "./components/AddTodoForm.tsx";
import {Header} from "./components/Header.tsx";
import {useState} from "react";
import {ListTodo} from "./components/ListTodo.tsx";


export type ITodo = {
    id: number;
    text: string;
    checked: boolean;
    pagination: boolean;
}


export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [nextId, setNextId] = useState(1);


  const backgroundStyle = {
        backgroundImage: `url(${imageBgMobile})`,
  };

  const addTodoHandler = (text: string) => {
        setTodos(prevTodos => [...prevTodos, { id: nextId, text, checked: false, pagination: false }]);
        setNextId(nextId + 1);
  };

  const deleteTodoHandler = (id: number) => setTodos(todos.filter(todo => todo.id !== id));

  const clearCheckedHandle = () => {
       setTodos(todos.filter( todo => !todo.checked))
  };

  const checkTodoHandler = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
  };


    return (
    <>
        <div className={`${themeProps.primaryBg} h-screen`}>
      <div style={backgroundStyle} className={`${themeProps.primaryBg} bg-cover bg-center bg-no-repeat h-52 px-7 font-josefin`}>
          <Header/>
          <AddTodoForm onAddTodo={addTodoHandler} />
          <ListTodo todos={todos} onDeleteTodo={deleteTodoHandler} onCheckTodo={checkTodoHandler} onClearCheck={clearCheckedHandle} />

      </div>
        </div>
    </>
  )
}