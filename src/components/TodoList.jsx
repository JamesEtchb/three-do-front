import { useEffect } from 'react'

export default function TodoList({ taskList, setTaskList }) {
  useEffect(() => {
    fetch('https://three-do-api-je.web.app/tasks')
      .then((results) => results.json())
      .then((tasks) => setTaskList(tasks))
      .catch(console.error)
  }, [setTaskList])
  if (!taskList) {
    return <h2>No tasks to complete</h2>
  }

  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  )
}
