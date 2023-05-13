import './Projects.css';

const Projects = () => {

  const data = [
    {
      link: "https://iapersonallifecoach.com/",
      text: "Ia Personal Life Coach",
      image: "./assets/Ia-coach.png",
      alt: "Ia Personal Life Coach"
    },
    {
      link: "https://gabrielcorderodeveloper.github.io/MyTo-doList/",
      text: "React to-do app",
      image: "./assets/to-do.png",
      alt: "React to-do app"
    },
    {
      link: "https://github.com/GabrielCorderoDeveloper/My-Portfolio",
      text: "My Portfolio",
      image: "./assets/portfolio.png",
      alt: "My Portfolio"
    },
    {
      link: "https://github.com/GabrielCorderoDeveloper",
      text: "Coming soon",
      image: "https://eckerd.org/wp-content/uploads/2022/01/image-coming-soon.jpg",
      alt: "Coming soon"
    },
    // {
    //   link: "https://github.com/GabrielCorderoDeveloper",
    //   text: "Coming soon",
    //   image: "https://eckerd.org/wp-content/uploads/2022/01/image-coming-soon.jpg",
    //   alt: "Coming soon"
    // }
  ];

  return (
    <div
      id="projects"
      className="d-flex row align-content-between main-w-container"
    >
      <p className="col-md-12 title who-t-spacing">List of projects</p>{" "}
      {/*//1?The styling for the title belongs to WhoIAm component*/}
      {/*//1! Projects card*/}
      <div className="project-container d-flex justify-content-center flex-wrap">
        {data.map((project, index) => (
          <div
            key={index}
            className="project-card col-xl-4 col-md-6 p-4 pb-0"
            style={{ marginTop: `${(index + 1) * 15}px` }}
          >
            <div className="m-auto">
              <a href={project.link}>
                <img className="project-img" src={project.image} alt={project.alt} />
                <div className={`number-square d-flex align-items-center justify-content-center ${index === 0 ? 'golden' : 'bg-lightBlack'} text-clearWhite rounded-4 pt-2`}>
                  {index + 1}
                </div>
              </a>
              <p className="">{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects
