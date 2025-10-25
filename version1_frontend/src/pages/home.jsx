import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	useEffect(() => {
		setUserName(localStorage.getItem("loggedInUser"));
	}, []);

	const handleLogoutBtn = (e) => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedInUser");
		toast.success("user logged out successfully");
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	};
	return (
		<>
			<div className="m-10 bg-slate-400 p-5">
				welcome {userName} to home page.
			</div>
			<div>
				<button
					className="m-10 bg-blue-400 p-5"
					onClick={handleLogoutBtn}
				>
					Logout
				</button>
			</div>
		</>
	);
}
export default Home;
