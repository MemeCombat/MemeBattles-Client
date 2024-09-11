import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-md">
        <p className="text-gray-500">Drawing will appear here</p>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Type your guess here..."
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Submit Guess
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Players</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span className="font-medium">Player 1</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span className="font-medium">Player 2</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span className="font-medium">Player 3</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
