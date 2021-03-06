//import logo from './logo.svg';
//import './App.css';

import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


const App = () => {
  const[showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,

    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,

    },
    {
      id: 3,
      text: "Food Shooping",
      day: "Feb 5th at 2:30pm",
      reminder: false,

    },
  ])


//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toogle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }



  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/*the below is a short way to create an if statement, so if showAddTask is true and... */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks"}
    </div>
  )
}

export default App


/*

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
<p>
  This is a test! {1+1}
</p>
</header>


*/