import { useState } from "react";
import toast from "react-hot-toast";

const useForgotpw = () => {
	const [loading, setLoading] = useState(false);

	const forgotPW = async (username, password,confirmPassword) => {
		const success = handleInputErrors(username, password,confirmPassword);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/forgotpw", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password}),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, forgotPW };
};
export default useForgotpw;

function handleInputErrors(username, password,confirmPassword) {
	if (!username || !password || !confirmPassword) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}
