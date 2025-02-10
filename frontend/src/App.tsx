import { useEffect, useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  completed: "pending" | "completed";
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);

  console.log(tasks);
  tasks.map(task => console.log(task.title));


  return (
    <div className="App">
      <div>
        <TaskForm fetchTasks={fetchTasks} />
      </div>
      <TaskList tasks={tasks} />
      
    </div>
  )
}

export default App
