import './App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {AddTodoForm} from "./components/AddTodoForm.tsx";
import {Header} from "./components/Header.tsx";
import {useState} from "react";
import {ListTodo} from "./components/ListTodo.tsx";


export type ITodo = {
    id: number;
    text: string;
}

export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [nextId, setNextId] = useState(1);

  const addTodoHandler = (text: string) => {
        setTodos(prevTodos => [...prevTodos, { id: nextId, text }]);
        setNextId(nextId + 1);
  };

  const backgroundStyle = {
        backgroundImage: `url(${imageBgMobile})`,
  };

  return (
    <>
      <div style={backgroundStyle} className={`${themeProps.primaryBg} bg-cover bg-center bg-no-repeat h-52 px-7 font-josefin`}>
          <Header/>
          <AddTodoForm onAddTodo={addTodoHandler} />
          <ListTodo todos={todos} />
      <h1>Vite + React</h1>
      <div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-light-theme-dark-grayish-blue">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}