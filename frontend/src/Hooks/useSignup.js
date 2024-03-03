import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    //{authUser, setAuthUser}
    const {authUser, setAuthUser } = useAuthContext();
    const signup = async ({ email, username, password, confirmPassword, gender }) => {
        if (!email || !username || !password || !confirmPassword || !gender) {
            toast.error("Please fill in all fields");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return false;
        }

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, password, confirmPassword, gender }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            //localStorage.setItem("chat-user", JSON.stringify(data));
            //setAuthUser(data);
        }
        catch (err) {
            //handling errors 
            toast.error(err.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

export default useSignup;
