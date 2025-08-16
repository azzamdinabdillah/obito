import Navbar from "../components/Navbar";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 lg:px-[75px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center py-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Features
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our platform the best choice for your learning
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/video-circle-green-fill.svg"
                  alt="Video Learning"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Video Learning
              </h3>
              <p className="text-gray-600">
                High-quality video content with interactive elements to enhance
                your learning experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/note-favorite-green.svg"
                  alt="Progress Tracking"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Monitor your learning progress with detailed analytics and
                achievement badges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/message-programming.svg"
                  alt="Community Support"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600">
                Connect with fellow learners and get help from our supportive
                community.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/crown-green.svg"
                  alt="Certificates"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certificates
              </h3>
              <p className="text-gray-600">
                Earn certificates upon completion to showcase your skills and
                achievements.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/device-message.svg"
                  alt="Mobile Learning"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mobile Learning
              </h3>
              <p className="text-gray-600">
                Learn on the go with our mobile-optimized platform that works on
                any device.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-obito-green rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/assets/images/icons/security-user-green-fill.svg"
                  alt="Secure Platform"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Secure Platform
              </h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security and
                privacy measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
