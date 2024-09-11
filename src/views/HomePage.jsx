export default function HomePage() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-1/4 bg-blue-800 p-6 flex flex-col shadow-2xl rounded-r-lg">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Players
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-lg">
            <div className="bg-yellow-400 w-12 h-12 rounded-full" />
            <div className="text-white text-xl font-medium">Pake nanya</div>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <div className="flex-1 bg-white text-black p-10 relative shadow-2xl rounded-lg mb-6">
          <div className="absolute top-4 right-4 flex space-x-3">
            <button className="bg-gray-300 text-black p-3 rounded-full shadow hover:bg-gray-400 transition">
              🔊
            </button>
            <button className="bg-gray-300 text-black p-3 rounded-full shadow hover:bg-gray-400 transition">
              🔗
            </button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src="https://example.com/gift.jpg"
              alt="Gift Image"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div className="bg-white text-black border-t border-gray-300 shadow-2xl rounded-lg p-6">
          <div className="w-full max-w-lg mx-auto">
            <h3 className="font-extrabold text-3xl mb-4 text-blue-800 text-center">
              Jawaban
            </h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Jawab disini..."
                className="flex-1 p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              />
              <button className="bg-blue-600 text-white p-4 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
