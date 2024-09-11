import { motion } from "framer-motion";

export default function SideBar() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="lg:w-1/4 w-full lg:h-auto h-1/3 bg-gradient-to-b from-blue-900/80 to-purple-900/80 p-6 flex flex-col shadow-2xl rounded-none  backdrop-blur-md overflow-hidden"
    >
      <h2 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 lg:mb-8 text-center">
        Pemain
      </h2>
      <ul className="space-y-4">
        <motion.li
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg shadow-lg border border-blue-300/30"
        >
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-12 h-12 rounded-full shadow-inner" />
          <div className="text-blue-100 text-lg lg:text-xl font-medium">
            Pake nanya
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
}
