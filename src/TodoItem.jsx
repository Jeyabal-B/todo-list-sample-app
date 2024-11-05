export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
          <label>
            <input 
              type="checkbox" 
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger">
            Delete
          </button>
        </li>
    )
}

//Last level component for this react app
//The todo items are added one by one and stored in local storage
//This keeps the items even if you refresh the page, as long as the server is running