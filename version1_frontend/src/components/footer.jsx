import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<>
			<footer className="bg-gray-900 text-gray-300">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
						{/* Brand Section */}
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<div className="bg-gradient-to-br from-purple-600 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
									<span className="text-white font-bold text-xl">
										EE
									</span>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
									EventEase
								</span>
							</div>
							<p className="text-sm text-gray-400">
								Your one-stop solution for seamless event
								management. Create, organize, and manage events
								effortlessly.
							</p>
							{/* Social Media Icons */}
							<div className="flex space-x-4">
								<a
									href="#"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center group"
									aria-label="Facebook"
								>
									<Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
								</a>
								<a
									href="#"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center group"
									aria-label="Twitter"
								>
									<Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
								</a>
								<a
									href="#"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center group"
									aria-label="Instagram"
								>
									<Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
								</a>
								<a
									href="#"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center group"
									aria-label="LinkedIn"
								>
									<Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-white font-semibold text-lg mb-4">
								Quick Links
							</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="home"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="events"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Events
									</a>
								</li>
								<li>
									<a
										href="about"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="contact"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Support */}
						<div>
							<h3 className="text-white font-semibold text-lg mb-4">
								Support
							</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Help Center
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										FAQs
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm hover:text-purple-400 transition-colors duration-200"
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>

						{/* Newsletter */}
						<div>
							<h3 className="text-white font-semibold text-lg mb-4">
								Newsletter
							</h3>
							<p className="text-sm text-gray-400 mb-4">
								Stay updated with our latest events and
								features.
							</p>
							<form className="space-y-2">
								<input
									type="email"
									placeholder="Your email"
									className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 transition-colors duration-200"
								/>
								<button
									type="submit"
									className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2"
								>
									Subscribe
									<Mail className="w-4 h-4" />
								</button>
							</form>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t border-gray-800 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-sm text-gray-400">
								© {new Date().getFullYear()} EventEase. All
								rights reserved.
							</p>
							<div className="flex space-x-6">
								<a
									href="#"
									className="text-sm hover:text-purple-400 transition-colors duration-200"
								>
									Terms of Service
								</a>
								<a
									href="#"
									className="text-sm hover:text-purple-400 transition-colors duration-200"
								>
									Privacy Policy
								</a>
								<a
									href="#"
									className="text-sm hover:text-purple-400 transition-colors duration-200"
								>
									Cookie Policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
