import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React Assignment", completed: false },
    { id: 2, text: "Read JavaScript Notes", completed: true },
  ]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle completed
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <h1>My Tasks</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="summary">
        <h3>
          Completed {tasks.filter((task) => task.completed).length} /{" "}
          {tasks.length}
        </h3>
      </div>
    </div>
  );
}

export default Tasks;