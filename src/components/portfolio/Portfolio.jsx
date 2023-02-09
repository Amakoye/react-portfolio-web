import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
  {
    id: 2,
    img: IMG2,
    title: "Charts Currency & infographics in figma",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
  {
    id: 3,
    img: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
  {
    id: 4,
    img: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
  {
    id: 5,
    img: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
  {
    id: 6,
    img: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://dribble.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}e</h3>
            <div className="cta">
              <a
                href={`${github}`}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
