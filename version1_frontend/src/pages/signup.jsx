import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		age: 0,
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmitBtn = async (e) => {
		e.preventDefault();
		const url = "http://localhost:3000/auth/signup";
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const result = await response.json();
			if (result) console.log(result);
		} catch (error) {
			toast.error("❌ " + error.message);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
				<div className="mb-4">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Signup Page
					</h2>
				</div>
				<div className="mb-6">
					<h3 className="text-2xl font-semibold text-center text-gray-700">
						Create Your Account
					</h3>
				</div>
				<form onSubmit={handleSubmitBtn} className="space-y-6">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="firstName"
							>
								First Name :
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								autoFocus
								id="firstName"
								onChange={handleChange}
								name="firstName"
								placeholder="Enter your first name..."
							/>
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="lastName"
							>
								Last Name :
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								onChange={handleChange}
								id="lastName"
								name="lastName"
								placeholder="Enter your last name..."
							/>
						</div>
					</div>
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
							htmlFor="age"
						>
							Age :
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							type="number"
							id="age"
							name="age"
							onChange={handleChange}
							placeholder="Enter your age..."
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
					<div>
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="confirmPassword"
						>
							Confirm Password :
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							onChange={handleChange}
							placeholder="Enter your confirmPassword..."
						/>
					</div>
					<fieldset className="mb-6">
						<legend className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
							Gender:
						</legend>
						<div className="flex items-center space-x-4 mt-2">
							<div className="flex items-center">
								<input
									type="radio"
									id="genderMale"
									name="gender"
									value="male"
									onChange={handleChange}
									className="form-radio h-5 w-5 text-gray-600"
								/>
								<label
									htmlFor="genderMale"
									className="ml-2 text-gray-700"
								>
									Male
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="radio"
									id="genderFemale"
									name="gender"
									onChange={handleChange}
									value="female"
									className="form-radio h-5 w-5 text-gray-600"
								/>
								<label
									htmlFor="genderFemale"
									className="ml-2 text-gray-700"
								>
									Female
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="radio"
									id="genderOther"
									name="gender"
									onChange={handleChange}
									value="other"
									className="form-radio h-5 w-5 text-gray-600"
								/>
								<label
									htmlFor="genderOther"
									className="ml-2 text-gray-700"
								>
									Other
								</label>
							</div>
						</div>
					</fieldset>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
							type="submit"
						>
							Signup
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Signup;
