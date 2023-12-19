import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoApp';
import CustomHook1 from './components/CustomHook1'
import CustomHook2 from './components/CustomHook2'
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Sidebar/>}></Route>
        <Route path='header' element={<Header/>}></Route>
        <Route path='todo' element={<TodoList/>}></Route>
        <Route path='customhook1' element={<CustomHook1/>}></Route>
        <Route path='customhook2' element={<CustomHook2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
