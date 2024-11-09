
export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-8">
      <section>
        <div className="rounded-lg"></div>

        {/* Content area */}
        <div className="bg-gradient-to-t from-slate-500 to-slate-900 flex flex-col items-center p-6 sm:p-8 text-white md:flex-row md:justify-center bg-opacity-90 rounded-lg">
          <div className="md:w-3/4 w-full p-4 md:p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent animate-pulse">
              Get In Touch
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl mt-2">
              Your perfect ride is just a message away!
            </p>

            {/* Contact Information */}
            <div className="bg-gradient-to-b from-slate-500 to-slate-200 p-4 sm:p-6 mt-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
                Contact Information
              </h3>
              <div className="space-y-2 sm:space-y-3 text-center">
                <div>
                  <span className="font-bold">Phone:</span> +1 (555) 123-4567
                </div>
                <div>
                  <span className="font-bold">Email:</span> info@example.com
                </div>
                <div>
                  <span className="font-bold">Location:</span> 1234 Elm Street, Springfield, IL
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
