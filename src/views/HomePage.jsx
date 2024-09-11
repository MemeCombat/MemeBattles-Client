import { motion } from "framer-motion";
import SideBar from "../components/SideBar";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className="flex  w-full my-auto lg:flex-row min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.redd.it/rfftqdg5flv71.jpg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row w-full"
      >
        <div className="flex-1 flex flex-col p-4 lg:p-6 overflow-hidden">
          <motion.div
            variants={itemVariants}
            className="flex-1 bg-gradient-to-br pl-0 pr-0 pt-9 pb-9 from-blue-800/60 to-purple-800/60 backdrop-blur-lg text-white p-8 lg:p-5 justify-center relative shadow-2xl rounded-lg mb-4 lg:mb-6 border border-blue-300/30 overflow-hidden"
          >
            <div className="flex items-center justify-center h-full">
              <img
                src="https://akcdn.detik.net.id/community/media/visual/2021/06/27/tebak-gambar-seru-akhir-pekan-lepas-tekanan-bikin-plong-pikiran_169.png?w=800&q=90"
                alt="Image"
                className="max-h-52 md:max-h-full max-w-full object-contain rounded-lg shadow-lg border-4 border-blue-300/50"
              />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-800/70 to-purple-800/70 backdrop-blur-lg text-white shadow-2xl rounded-lg p-4 lg:p-6 border border-blue-300/30"
          >
            <div className="w-full max-w-lg mx-auto">
              <h3 className="font-extrabold text-2xl lg:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-center">
                Jawaban
              </h3>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Tebak nama gambar disini..."
                  className="flex-1 p-4 bg-white/20 border-2 border-blue-400/50 rounded-lg text-base lg:text-lg focus:outline-none focus:border-purple-400 text-white placeholder-blue-200/70 transition duration-300"
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Jawab
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
