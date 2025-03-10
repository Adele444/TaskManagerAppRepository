import { useState } from "react";
import { auth, signOut } from "./firebase";

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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Welcome, {user.displayName}</h2>
      
      {/* Logout Button */}
      <div className="flex justify-center mb-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => signOut(auth).then(() => setUser(null))}
        >
          Logout
        </button>
      </div>

      {/* Add Task Button */}
      <div className="flex justify-center mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
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
                className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition"
                onClick={() => deleteTask(index)}
              >
                ✖
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskManager;
