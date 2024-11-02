import { useState } from "react"; 

export function FormComponent( onSubmit) {
    
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e){
        e.preventDefault(); //prevents page from refreshing
        if(newItem === "" ){
            return 
        }

        // eslint-disable-next-line react/prop-types
        onSubmit(newItem);

        //addTodo(newItem);

        setNewItem("");
    }
        
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
    </form>
    )
}