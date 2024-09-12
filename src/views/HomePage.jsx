import { motion } from "framer-motion";
import { useGameContext } from "../context/GameContext";
import { useCallback, useEffect, useState } from "react";
import { socket } from "../socket";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HomePage() {
  const [guess, setGuess] = useState({});
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();
  const { roomId, gameStarted, setGameStarted } = useGameContext();

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

  const handleGameEnd = useCallback(
    ({ message, won, score, totalScore }) => {
      const title = won ? "Congratulations!" : "Game Over";
      const icon = won ? "success" : "info";

      Swal.fire({
        title: title,
        html: `
        ${message}<br><br>
        Your Score: ${score}<br>
        Winning Score: ${totalScore}
      `,
        icon: icon,
        confirmButtonText: "Back to Home",
      }).then(() => {
        navigate("/home");
        setGameStarted(false);
        localStorage.clear();
      });
    },
    [navigate, setGameStarted]
  );

  // Joining room and socket events
  useEffect(() => {
    if (!roomId) {
      navigate("/home");
      return;
    }

    socket.emit("joinRoom", roomId);

    socket.on("startGame", (guessData) => {
      setGuess(guessData);
      setGameStarted(true);
      setTimer(10);
    });

    socket.on("timeUp", ({ message, newGuess }) => {
      Swal.fire({
        title: "Time's Up!",
        text: message,
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
      setGuess(newGuess);
      setTimer(10);
      setAnswer("");
    });

    socket.on("gameEnded", handleGameEnd);

    return () => {
      socket.off("startGame");
      socket.off("timeUp");
      socket.off("gameEnded");
    };
  }, [roomId, navigate, setGameStarted, handleGameEnd]);

  useEffect(() => {
    let interval;
    if (gameStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timer]);

  const handleAnswer = async (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === guess.answer?.toLowerCase()) {
      const newScore = score + 1;
      setScore(newScore);

      Swal.fire({
        title: "Correct!",
        text: `You've got ${newScore} out of 5 answers right.`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setAnswer("");
      socket.emit("correctAnswer", roomId);
    } else {
      Swal.fire({
        title: "Wrong Answer",
        text: "Please try again!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div
      className="flex w-full my-auto lg:flex-row min-h-screen bg-cover bg-center bg-no-repeat"
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
              {guess?.img && (
                <img
                  src={guess.img}
                  alt="Image"
                  className="max-h-52 md:max-h-full max-w-full object-contain rounded-lg shadow-lg border-4 border-blue-300/50"
                />
              )}
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
              <form onSubmit={handleAnswer}>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Tebak nama gambar disini..."
                    className="flex-1 p-4 bg-white/20 border-2 border-blue-400/50 rounded-lg text-base lg:text-lg focus:outline-none focus:border-purple-400 text-white placeholder-blue-200/70 transition duration-300"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    type="submit"
                  >
                    Jawab
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
