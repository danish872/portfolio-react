import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        Salut, moi c’est <span>Dan</span> 
      </h1>

      <p>Développeur web | BTS SIO | Passionné par le code</p>

      <div className="hero-buttons">
        <button>Voir mes projets</button>
        <button className="btn-outline">Mon CV</button>
      </div>
    </motion.section>
  );
}
