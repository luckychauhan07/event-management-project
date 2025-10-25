import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	useEffect(() => {}, []);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<div className="bg-gradient-to-br from-purple-600 to-blue-600 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-xl md:text-2xl">
									EE
								</span>
							</div>
							<span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
								EventEase
							</span>
						</div>

						{/* Desktop Navigation Links */}
						<nav className="hidden md:flex items-center space-x-1">
							<a
								href="home"
								className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
							>
								Home
							</a>
							<a
								href="event"
								className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
							>
								Events
							</a>
							<a
								href="about"
								className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
							>
								About
							</a>
							<a
								href="contact"
								className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
							>
								Contact
							</a>
						</nav>

						{/* Desktop and Mobile Login Button */}
						<div className="flex items-center space-x-2 md:space-x-3">
							<button className="hidden md:block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
								Login
							</button>

							{/* Mobile Menu Button */}
							<button
								onClick={toggleMobileMenu}
								className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
								aria-label="Toggle mobile menu"
							>
								{isMobileMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu Dropdown */}
					<div
						className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
							isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
						}`}
					>
						<nav className="flex flex-col space-y-2 pt-4">
							<a
								href="home"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</a>
							<a
								href="event"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Event
							</a>
							<a
								href="about"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</a>
							<a
								href="contact"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</a>
							<button className="mx-4 mt-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
								Login
							</button>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
