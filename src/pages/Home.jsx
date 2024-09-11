export default function Home() {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Guess the Gift Game</title>
        <div className="flex h-screen">
          {/* Left Sidebar: Players List */}
          <div className="w-1/4 bg-blue-700 p-4 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Players</h2>
            </div>
            <ul>
              <li className="flex items-center space-x-2 p-2 bg-blue-600 rounded-lg mb-2">
                <div className="bg-yellow-400 w-8 h-8 rounded-full" />
                <div>
                  Pake nanya <span className="text-yellow-300">95 poin</span>
                </div>
              </li>
              {/* Repeat similar structure for other players */}
            </ul>
          </div>
          {/* Main Content: Drawing Area and Chat */}
          <div className="flex-1 flex flex-col">
            {/* Top Section: Drawing Area */}
            <div className="flex-1 bg-white text-black p-6 relative">
              <div className="absolute top-4 right-4">
                <button className="bg-gray-300 text-black p-2 rounded-full">
                  🔊
                </button>
                <button className="bg-gray-300 text-black p-2 rounded-full ml-2">
                  🔗
                </button>
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="https://example.com/gift.jpg"
                  alt="Gift Image"
                  className="max-h-full"
                />
              </div>
            </div>
            {/* Bottom Section: Answer and Chat */}
            <div className="flex h-24 bg-white text-black border-t border-gray-300">
              {/* Answer Input */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">Jawaban</h3>
                </div>
                <input
                  type="text"
                  placeholder="Jawab disini..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Chat */}
              <div className="w-1/3 border-l border-gray-300 p-4 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">Obrolan</h3>
                </div>
                <input
                  type="text"
                  placeholder="Ngobrol disini..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
