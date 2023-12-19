import AddItem from './AddItem'
import TodoList from './TodoList'

function TodoApp(){
    return(
        <>
        <div className="app">
        <AddItem/>
        <TodoList/>
        </div>
        
        </>
    )
}
export default TodoApp