export default function Hero() {
  return (
    <section className="hero">
      <h1 className="fade-in">
        Salut, moi c’est <span>Dan</span> 👋
      </h1>
      <p className="fade-in delay-1">
        Étudiant en BTS SIO | Développeur web passionné
      </p>
      <div className="hero-buttons fade-in delay-2">
        <a href="#projects">
          <button>Voir mes projets</button>
        </a>
        <a href="/cv_dan.pdf" download>
          <button className="btn-outline">Mon CV</button>
        </a>
      </div>
    </section>
  );
}
