import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmitBtn = async (e) => {
		e.preventDefault();
		if (!formData.email || !formData.password) {
			toast.error("All fields are required");
			return;
		}
		const url = "http://localhost:3000/auth/login";
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const result = await response.json();
			if (result.status === "success") {
				toast.success("user login successfully");
				localStorage.setItem("token", result.token);
				localStorage.setItem(
					"loggedInUser",
					`${result.data.firstName} ${result.data.lastName}`
				);
				setTimeout(() => {
					navigate("/home");
				}, 2000);
			} else if (result.status === "failed") {
				toast.error(result.message);
			} else if (!result) {
				toast.error("Internal server error ");
			}
			console.log(result);
		} catch (error) {
			toast.error("❌ " + error.message);
		}
	};
	return (
		<>
			<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
				<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
					<div className="mb-4">
						<h2 className="text-3xl font-bold text-center text-gray-800">
							Login Page
						</h2>
					</div>
					<div className="mb-6">
						<h3 className="text-2xl font-semibold text-center text-gray-700">
							Sign In Your Account
						</h3>
					</div>
					<form onSubmit={handleSubmitBtn} className="space-y-6">
						<div>
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="email"
							>
								Email :
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="email"
								id="email"
								name="email"
								onChange={handleChange}
								placeholder="Enter your email..."
							/>
						</div>

						<div>
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="password"
							>
								Password :
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								placeholder="Enter your password..."
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
								type="submit"
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
export default Login;
