
function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-black  p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl text-white font-bold  mb-4">Welcome to Home</h1>
        <p className="text-lg text-white ">We are glad to have you here. Explore and enjoy our services!</p>
        <div className="mt-6">
          <button
            className="bg-white transition-all  duration-0 hover:duration-1000 hover:rounded-full  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
