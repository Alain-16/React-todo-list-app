import {Link} from 'react-router-dom'


function Sidebar(){
    return(
        <div class="sidebar">
        <Link to="header">Header</Link>
        <Link to="todo">ToDo List</Link>
        <Link to="customhook1">react customHook1</Link>
        <Link to="customhook2">react customHook2</Link>
        
      </div>
    )
}
export default Sidebar