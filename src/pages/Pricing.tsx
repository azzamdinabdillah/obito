import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 lg:px-[75px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center py-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $9<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Access to basic courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Community support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Progress tracking
                </li>
              </ul>
              <button className="w-full bg-obito-green text-white py-3 px-6 rounded-full font-semibold hover:drop-shadow-effect transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-obito-green text-white border border-obito-green rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-obito-green px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $19<span className="text-lg opacity-80">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Everything in Basic
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Premium courses
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Certificates
                </li>
              </ul>
              <button className="w-full bg-white text-obito-green py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $49<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom learning paths
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Team management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced analytics
                </li>
              </ul>
              <button className="w-full bg-obito-green text-white py-3 px-6 rounded-full font-semibold hover:drop-shadow-effect transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
