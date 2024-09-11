import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function SideBar() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    socket.on("online:users", (args) => {
      console.log(args, "ini args");
      setOnlineUsers(args);
    });
  }, []);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="h-full bg-gradient-to-b from-blue-900 to-purple-900 p-4 lg:p-6 flex flex-col shadow-xl backdrop-blur-md overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 lg:mb-8 text-center"
      >
        Pemain
      </motion.h2>
      <ul className="space-y-4">
        {onlineUsers.map((el, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-4 p-3 bg-white/10 shadow-lg border border-blue-300/30 rounded-lg"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full shadow-inner flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12l5 5 10-10"
                />
              </svg>
            </div>
            <div className="text-blue-100 text-lg lg:text-xl font-medium">
              {el.username}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
