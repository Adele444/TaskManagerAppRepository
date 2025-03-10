import { auth, provider, signInWithPopup } from "./firebase";

function Login({ setUser }) {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={signIn}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
