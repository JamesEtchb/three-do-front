import { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input

export default function AddTask({ setTaskList }) {
  const [task, setTask] = useState('')  
  const addTask = () => {
    fetch('https://three-do-api-je.web.app/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, done: false }),
    })
      .then((results) => results.json())
      .then((data) => {
        setTaskList(data)
        setTask('')
      })
      .catch(console.error)
  }
  return (
      <Search 
      value={task}
      onChange={e => setTask(e.target.value)}
      enterButton="Add" 
      size="Large" 
      onSearch={addTask} />
  )
}
