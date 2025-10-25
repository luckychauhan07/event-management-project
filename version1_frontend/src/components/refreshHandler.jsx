import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RefreshHandler = ({ setIsAuthenticated }) => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		const verifyJwtToken = async () => {
			console.log(location.pathname);
			const token = localStorage.getItem("token");
			if (!token) {
				setIsAuthenticated(false);
				return;
			}
			const url = "http://localhost:3000/auth/verify";
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();
			console.log(result);
		};
		verifyJwtToken();
	}, []);
	return null;
};
export default RefreshHandler;
