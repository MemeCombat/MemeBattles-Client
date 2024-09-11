import { TbPhotoSearch } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

export default function AddUsername() {
  const nav = useNavigate()
  const [username , setUsername ] = useState("")
  
  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleOnClick = (e) => {
    e.preventDefault(e)
    socket.auth = { username: username };
    socket.disconnect().connect();
    localStorage.setItem("username" , username)
    nav("/")
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.redd.it/rfftqdg5flv71.jpg')`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md lg:p-8 p-6 ml-3 mr-3 rounded-2xl  overflow-hidden"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 0 20px rgba(0, 0, 0, 0.3), 0 0 60px rgba(59, 130, 246, 0.5)",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="lg:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 flex items-center justify-center space-x-3">
            <span>Tebak</span>
            <TbPhotoSearch className="text-blue-400" />
            <span>Gambar</span>
          </h1>

          <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-blue-200">
              Selamat Datang di Tebak Gambar!
            </h2>

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Masukkan nama Anda..."
              className="w-full p-3 mb-6 bg-white/10 border-2 border-blue-300/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/70 transition duration-300"
              onChange={handleChangeUsername}
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none transition duration-300"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
              onClick={handleOnClick}
            >
              Mulai
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
