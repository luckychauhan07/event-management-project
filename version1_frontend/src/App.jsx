import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainSection from "./components/main";
import axios from "axios";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<Header />
			<div className="app">
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
			{/* <Header></Header>
			<MainSection></MainSection>*/}
			<Footer></Footer>
			<ToastContainer position="top-right" autoClose={3000} />
		</>
	);
}

export default App;
