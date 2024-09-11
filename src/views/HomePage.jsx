import { motion } from "framer-motion";

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
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4 w-full flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.redd.it/rfftqdg5flv71.jpg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-800/60 to-purple-800/60 backdrop-blur-lg text-white p-6 rounded-lg shadow-2xl mb-6 border border-blue-300/30"
        >
          <div className="flex items-center justify-center">
            <img
              src="https://akcdn.detik.net.id/community/media/visual/2021/06/27/tebak-gambar-seru-akhir-pekan-lepas-tekanan-bikin-plong-pikiran_169.png?w=800&q=90"
              alt="Tebak Gambar"
              className="max-h-full w-auto object-contain rounded-lg shadow-lg border-2 border-blue-300/50"
            />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-800/70 to-purple-800/70 backdrop-blur-lg text-white shadow-2xl rounded-lg p-6 border border-blue-300/30"
        >
          <h3 className="font-extrabold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-center">
            Jawaban
          </h3>
          <div className="flex flex-col space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Tebak nama gambar disini..."
              className="p-4 bg-white/20 border-2 border-blue-400/50 rounded-lg text-base focus:outline-none focus:border-purple-400 text-white placeholder-blue-200/70 transition duration-300"
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
        </motion.div>
      </motion.div>
    </div>
  );
}
