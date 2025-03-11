import { useState } from "react";
import { auth, signOut } from "./firebase";
import './TaskManager.css';

/**
 * TaskManager Component - Displays tasks and allows users to add/remove tasks.
 * @param {Object} user - The authenticated user's details.
 * @param {Function} setUser - Function to update the user state after logout.
 */
function TaskManager({ user, setUser }) {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = () => {
    const newTask = prompt("Enter a new task:");
    if (newTask) setTasks([...tasks, newTask]);
  };

  // Function to delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    //max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
    <div className="container">
      <h3 className="welcome">Welcome, {user.displayName}</h3>
      

      {/* Add Task Button */}
      <div className="flex justify-center mb-4">
      <h3 className="tasklisttitle">Task List &emsp; &emsp; &emsp;</h3>
        <button
          className="addTask"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      

      {/* Task List */}
      <ul>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Click "Add Task" to start.</p>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2"
            >
              {task}
              <button
                className="text-white px-3 py-1 rounded-lg hover:bg-red-500 transition"
                onClick={() => deleteTask(index)}
              >
                ✖
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Logout Button code text-white px-4 py-2 rounded-lg hover:bg-red-600 transition*/} 
      <div className="flex justify-center mb-4">
        <button
          className="logout"
          onClick={() => signOut(auth).then(() => setUser(null))}
        >
          Logout
        </button>
      </div>



    </div>
  );
}

export default TaskManager;
