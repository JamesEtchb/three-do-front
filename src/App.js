import { useState } from 'react'
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState()
  return (
    <>
      <h1>Three-do</h1>
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      <AddTask setTaskList={setTaskList}/>
    </>
  );
}

export default App;
