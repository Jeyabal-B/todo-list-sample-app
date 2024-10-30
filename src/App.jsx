import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Commit code
            <button className="btn btn-danger">Delete</button>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Create a document
            <button className="btn btn-danger">Delete</button>
          </label>
        </li>
      </ul>
    </>
  );
}

export default App;