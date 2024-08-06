import { useState } from "react"

function ToDoList() {
    
     const [tasks , setTask] = useState([]);

     const[newTask , setNewTask] = useState("");

      function addTask (){
            if(newTask.trim() !== "") {
                  setTask(t => [...t , newTask]);
                  setNewTask("");
            }
      }
      function removeTask(index) {
            setTask(tasks.filter((_ , i) => i !== index));
      }
      function moveUpTask(index) {
             if(index > 0) {
              const updatedTasks = [...tasks];
              [updatedTasks[index] , updatedTasks[index - 1]] =  [updatedTasks[index - 1] , updatedTasks[index]] 
              setTask(updatedTasks);
             }
      }
      function moveDownTask(index) {
              if(index < tasks.length) {
                const updatedTasks = [...tasks];
                [updatedTasks[index] , updatedTasks[index + 1]] =  [updatedTasks[index + 1] , updatedTasks[index]] 
                setTask(updatedTasks);
              }
      }
      function handleInputChange(e){
            setNewTask(e.target.value);
      }

      return(
        <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type = "text" placeholder="Enter a Task.." value = {newTask} onChange={handleInputChange}/>
        <button className="add-button"  onClick={addTask}>Add</button>
        <ol>
          {tasks.map((task , index) => <li key={index}>
            <span>{task}</span>
            <button className = "delete-button" onClick={() => removeTask(index)}>Delete</button>
            <button className = "move-button" onClick = {() => moveUpTask(index)}>UP</button>
            <button className = "move-button" onClick = {() => moveDownTask(index)}>DOWN</button> </li>)}
        </ol>   
        </div>
      );
} 

export default ToDoList