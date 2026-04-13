import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logo">Dan.dev</h2>

      <div className="nav-links">
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
