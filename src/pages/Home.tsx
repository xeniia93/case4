import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="home">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        От Ефремовой Ксении
      </motion.h1>

      <div className="home-buttons">
        <Link to="/slider">
          <button>Перейти к слайдеру</button>
        </Link>

        <Link to="/register">
          <button>Регистрация</button>
        </Link>
      </div>
    </div>
  );
};