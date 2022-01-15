//import logo from './logo.svg';
//import './App.css';

import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"


function App() {
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

    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;


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