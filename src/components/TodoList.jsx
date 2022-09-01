import { useEffect, useState } from 'react'
import { List, Alert } from 'antd'
import TodoListCard from './TodoListCard'

export default function TodoList({ tasklist, setTasklist, token }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    fetch('https://three-do-api-je.web.app/tasks', {
    // fetch('http://localhost:3030/tasks', {
      headers: {
        'Authorization': token,
      }
    })
      .then((results) => results.json())
      .then((tasks) => {
        setTasklist(tasks)
        setLoading(false)
        setError('')
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [token, setTasklist, setLoading, setError])

  return (
    <>
      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
      <div className="task-list">
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard
              key={item.id}
              item={item}
              token={token}
              setError={setError}
              setLoading={setLoading}
              setTasklist={setTasklist}
            />
          )}
        />
      </div>
    </>
  )
}
