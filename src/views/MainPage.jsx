import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { socket } from "../socket";
import { useGameContext } from "../context/GameContext";

const MainPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setRoomId } = useGameContext();

  useEffect(() => {
    return () => {
      socket.off('roomCreated');
      socket.off('roomJoined');
      socket.off('roomFull');
      socket.off('noRooms');
    };
  }, []);

  const handleCreateRoom = () => {
    setError(""); 
    socket.emit('createRoom');
    socket.once('roomCreated', (roomId) => {
      setRoomId(roomId);
      navigate('/play');
    });
  };

  const handleJoinRoom = () => {
    setError(""); // 
    socket.emit('joinRandomRoom');
    socket.once('roomJoined', (roomId) => {
      setRoomId(roomId);
      navigate('/play');
    });
    
    socket.once('roomFull', () => setError('Room is full, try again.'));
    socket.once('noRooms', () => setError('No rooms available. Try creating a room.'));
  };

  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(background-pattern.png)' }}>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 ml-6">Main Menu</h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105" onClick={handleCreateRoom}>
          Create Room
        </button>
        <input
          type="text"
          id="room-id"
          placeholder="Enter Room ID"
          className="w-full max-w-sm px-4 py-3 text-lg text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-shadow duration-300"
        />
        <button className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105" onClick={handleJoinRoom}>
          Join Room
        </button>
      </div>
      {error && (
        <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
      )}
    </div>
  </div>
   
  );
};

export default MainPage;