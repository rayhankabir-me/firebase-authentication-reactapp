import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
export default function Home() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out..");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <p>User Info Loading..</p>;

  return (
    <>
      <h1>Home Page</h1>
      <div>Welcome, {user?.email}</div>

      <button
        className="bg-black text-white tounded p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
