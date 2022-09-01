import { List, Switch } from 'antd'

export default function TodoListCard({ token, item, setError, setTasklist, setLoading }) {
    const handleSwitch = () => {
        //make a patch request to api
        const body = { done: !item.done }
        // fetch(`http://localhost:3030/tasks/${item.id}`, {
        fetch(`https://three-do-api-web.app/tasks/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            setTasklist(data)
            setError('')
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }
    return (
        <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Switch 
                  onChange={() => handleSwitch()} 
                  checked={item.done} />}
                title={<p>{item.task}</p>}
              />
            </List.Item>
    )
}