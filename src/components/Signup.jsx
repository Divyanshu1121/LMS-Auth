import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, getFire } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [role, setRole] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();

    let handleSignup = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {
            let res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(getFire, "Users", res.user.uid), { email, role });
            navigate("/dashboard");
        } catch (err) {
            console.log(err.message);
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered");
            } else {
                setError("Signup failed. Try again.");
            }
        }
    };

    return (
        <div className="auth-box">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                </select>

                {error && <p className="error-text">{error}</p>}
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/">Login here</Link></p>
        </div>
    );
}

export default Signup;
