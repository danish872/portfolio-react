import { motion } from "framer-motion";

const projects = [
  {
    name: "Password Checker",
    desc: "Outil Python de vérification de mots de passe sécurisés.",
    tech: "Python",
    link: "https://github.com/danish872/password-checker"
  },
  {
    name: "SSH Log Analyzer",
    desc: "Analyse les logs SSH pour détecter les connexions suspectes.",
    tech: "Python",
    link: "https://github.com/danish872/ssh-log-analyzer"
  },
  {
    name: "Port Scanner",
    desc: "Scanner de ports réseau pour audit de sécurité.",
    tech: "Python",
    link: "https://github.com/danish872/Port-Scanner"
  },
  {
    name: "Binary Trees",
    desc: "Implémentation complète des arbres binaires en C.",
    tech: "C",
    link: "https://github.com/danish872/holbertonschool-binary_trees"
  },
  {
    name: "Sorting Algorithms",
    desc: "Algorithmes de tri (bubble, quick, merge…).",
    tech: "C",
    link: "https://github.com/danish872/holbertonschool-sorting_algorithms"
  },
  {
    name: "Portfolio React",
    desc: "Mon portfolio personnel développé avec React + Vite.",
    tech: "React",
    link: "https://github.com/danish872/portfolio-react"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span className="tech">{p.tech}</span>
            <a href={p.link} target="_blank" rel="noreferrer">
              Voir sur GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
