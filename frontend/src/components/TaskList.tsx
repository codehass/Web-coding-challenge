
interface Task {
  id: string;
  title: string;
  completed: "pending" | "completed";
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {


  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map(task => (
         <li key={task.id}>
          {task.title}
          <button>Edit</button>
          <button>Delete</button>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
