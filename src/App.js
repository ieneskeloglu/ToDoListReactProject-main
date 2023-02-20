import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import { useState } from 'react';



function App() {

  const [todolist, setTodolist] = useState([])
  const [situation, setSituation] = useState("All")
  return (
    <div className="App">
      <Header todolist={todolist} setTodolist={setTodolist} />
      <List todolist={todolist} setTodolist={setTodolist} situation={situation} />
      <Footer situation={situation} setSituation={setSituation} todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default App;
