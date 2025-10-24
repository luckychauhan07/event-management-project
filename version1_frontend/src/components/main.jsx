import {
	Calendar,
	Users,
	Shield,
	Palette,
	BarChart,
	Smartphone,
	ArrowRight,
} from "lucide-react";

const MainSection = () => {
	return (
		<>
			<main className="min-h-screen">
				{/* Hero Section */}
				<section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 md:py-32">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Manage Events{" "}
								<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
									Effortlessly
								</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
								Create, organize, and manage your events with
								ease. EventEase provides all the tools you need
								to make your events successful.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold flex items-center justify-center gap-2">
									Get Started
									<ArrowRight className="w-5 h-5" />
								</button>
								<button className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Why Choose EventEase?
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Everything you need to create and manage
								successful events
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Feature 1 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Calendar className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Easy Event Creation
								</h3>
								<p className="text-gray-600">
									Create events in minutes with our intuitive
									interface. Set dates, times, and details
									effortlessly.
								</p>
							</div>

							{/* Feature 2 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Users className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Manage Attendees
								</h3>
								<p className="text-gray-600">
									Keep track of attendees, send invitations,
									and manage RSVPs all in one place.
								</p>
							</div>

							{/* Feature 3 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Shield className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Secure & Reliable
								</h3>
								<p className="text-gray-600">
									Your data is protected with enterprise-grade
									security. We ensure your events are safe and
									secure.
								</p>
							</div>

							{/* Feature 4 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Palette className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Custom Branding
								</h3>
								<p className="text-gray-600">
									Personalize your events with custom
									branding, colors, and themes that match your
									style.
								</p>
							</div>

							{/* Feature 5 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<BarChart className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Analytics & Reports
								</h3>
								<p className="text-gray-600">
									Get insights into your events with detailed
									analytics and comprehensive reports.
								</p>
							</div>

							{/* Feature 6 */}
							<div className="p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Smartphone className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Mobile Friendly
								</h3>
								<p className="text-gray-600">
									Access and manage your events from anywhere
									with our fully responsive mobile interface.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									10K+
								</div>
								<div className="text-purple-100">
									Events Created
								</div>
							</div>
							<div>
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									50K+
								</div>
								<div className="text-purple-100">
									Active Users
								</div>
							</div>
							<div>
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									98%
								</div>
								<div className="text-purple-100">
									Satisfaction Rate
								</div>
							</div>
							<div>
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									24/7
								</div>
								<div className="text-purple-100">Support</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 md:p-16 shadow-xl">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Ready to Get Started?
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Join thousands of organizers who trust EventEase
								for their event management needs.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
									Start Free Trial
								</button>
								<button className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold">
									Contact Sales
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
export default MainSection;
