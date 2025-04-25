import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getFire } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LeaveManager from "./components/LeaveManager";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  let [user, setUser] = useState(null);
  let [role, setRole] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (currUser) => {
      setUser(currUser);
      if (currUser) {
        let userDoc = await getDoc(doc(getFire, "Users", currUser.uid));
        setRole(userDoc.exists() ? userDoc.data().role : null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard"
          element={user ? <LeaveManager userRole={role} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
