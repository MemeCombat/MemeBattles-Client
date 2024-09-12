import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { socket } from "../socket";
import { useGameContext } from "../context/GameContext";

const MainPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setRoomId } = useGameContext();

  useEffect(() => {
    return () => {
      socket.off("roomCreated");
      socket.off("roomJoined");
      socket.off("roomFull");
      socket.off("noRooms");
    };
  }, []);

  const handleCreateRoom = () => {
    setError("");
    socket.emit("createRoom");
    socket.once("roomCreated", (roomId) => {
      setRoomId(roomId);
      navigate("/play");
    });
  };

  const handleJoinRoom = () => {
    setError("");
    socket.emit("joinRandomRoom");
    socket.once("roomJoined", (roomId) => {
      setRoomId(roomId);
      navigate("/play");
    });

    socket.once("roomFull", () => setError("Room is full, try again."));
    socket.once("noRooms", () =>
      setError("No rooms available. Try creating a room.")
    );
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div
      className="flex w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.redd.it/rfftqdg5flv71.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-12 flex flex-col justify-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-800/60 to-purple-800/60 backdrop-blur-lg text-white p-8 lg:p-12 shadow-2xl rounded-lg border border-blue-300/30"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Main Menu
          </h1>

          <div className="flex flex-col items-center justify-center space-y-6">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 197, 253, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-64 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
              onClick={handleCreateRoom}
            >
              Create Room
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-64 bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
              onClick={handleJoinRoom}
            >
              Join Room
            </motion.button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center text-red-400 font-medium"
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainPage;
