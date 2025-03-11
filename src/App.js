import { useState } from "react";
import Login from "./Login";
import TaskManager from "./TaskManager";

/**
 * Main App Component - Handles authentication state and renders the login or task manager.
 */
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center ">
      {user ? <TaskManager user={user} setUser={setUser} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
