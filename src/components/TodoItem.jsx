import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/TodoSlice";


function TodoItem({id,title}){
    const dispatch = useDispatch();
    const remove = ()=>{
        dispatch(removeTodo({
            id:id
        }))
    }
    return(
        <>
        <li className="task-item">
        <div>
            {title}
        </div>
        <div>
            <button className="remove-task-button" onClick={()=> remove()}>Delete</button>
        </div>
        </li>
        </>
    )
}
export default TodoItem