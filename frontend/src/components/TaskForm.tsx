import { useState } from "react";
import axios from "axios";

interface TaskFormProps {
  fetchTasks: () => void;
}

const TaskForm = ({ fetchTasks }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/todos", { title });
    fetchTasks();
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="New Task" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
