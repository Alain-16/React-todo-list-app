import { useSelector} from 'react-redux'
import TodoItem from './TodoItem';




function Todolist(){
   
    const list = useSelector(state => state.todo.todos);
    return(
        <>
        
        <ul className="tasks-list">
            {list.map((todo)=>(
               <TodoItem key={todo.id} id={todo.id} title={todo.text}/>
            ))}
        </ul>
        
        
        </>
    )
}

export default Todolist