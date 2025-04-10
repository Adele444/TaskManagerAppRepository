import { useState } from "react";
import { auth, signOut } from "./firebase";
import './TaskManager.css';
import { getAuth, updateProfile } from "firebase/auth";


const auth1 = getAuth(); //not working:(



updateProfile(auth1.currentUser, {
  displayName: "to your task list "
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

/**
 * TaskManager Component - Displays tasks and allows users to add/remove tasks.
 * @param {Object} user - The authenticated user's details.
 * @param {Function} setUser - Function to update the user state after logout.
 */
function TaskManager({ user, setUser }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); //new added line



  const addTask = (e) => {
    e.preventDefault(); // Prevent page reload
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask(""); // Clear input field
    }
  };

 // Function to delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }; 

  return (
    //max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
    <div className="container">
      <h3 className="welcome">Welcome, {user.displayName}</h3>
      
      {/* Task Input Form */}
      
      <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-2 mb-4">
      
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="py-1 flex-1 border border-gray-300 p-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        
        <button
          type="submit"
          className="addTask"
        >
          Add Task
        </button>

        
      </form>
 <h3 className="tasklisttitle items-center justify-center" >Task List  &emsp; </h3>


     {/* Add Task Button 
      <div className="flex justify-center mb-4">
      <h3 className="tasklisttitle">Task List &emsp; &emsp; &emsp;</h3>
        <button
          className="addTask"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>   */}

      

      {/* Task List */}
      <ul>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 text-[14px]">No tasks yet. Click "Add Task" to start.</p>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2"
            >
              {task}
              <button
                className="text-white px-3 py-1 rounded-lg hover:bg-brown-700 transition"
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

  /*// Function to add a task but using the popup java thing
  const addTask = () => {
    const newTask = prompt("Enter a new task:");
    if (newTask) setTasks([...tasks, newTask]);
  }; */