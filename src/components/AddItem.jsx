import { useDispatch } from "react-redux"
import { addTodo } from "../redux/TodoSlice"
import React,{ useState } from "react";



function AddTodo(){
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        if(input === ""){
            alert("input cannot be empty:::")
        }else{
           dispatch(addTodo({
            task:input
        }))
        setInput("") 
        }
        
    }
    return(
        <>
        <div className="add-todo">
            <input type="text" 	className="task-input" onChange={(event) => setInput(event.target.value)} value={input}/>
            <button  className="task-button" onClick={onSubmit}>Add task</button>
        </div>
        </>
    )
}
export default AddTodo