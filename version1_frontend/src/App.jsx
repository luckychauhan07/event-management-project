import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import RefreshHandler from "./components/refreshHandler";
import AddEvent from "./pages/addEvent";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState();

	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/login" />;
	};

	return (
		<>
			<Header />
			<div className="app">
				<RefreshHandler setIsAuthenticated={setIsAuthenticated} />
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/home"
						element={<PrivateRoute element={<Home />} />}
					/>
					<Route
						path="add-event"
						element={<PrivateRoute element={<AddEvent />} />}
					/>
				</Routes>
			</div>
			<Footer />
			<ToastContainer position="top-right" autoClose={3000} />
		</>
	);
}

export default App;
