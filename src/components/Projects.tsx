import './Projects.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const Projects = () => {

  const data = [
    {
      link: "https://ailifementor.com/",
      title: "AI Personal Life Coach",
      text: "AI Personal Life Coach© is a personal coach that will adapt itself to fit your needs. The best and fastest way to make progress towards a goal is to have someone that show us the way. A good coach gives you advices however and excellent coach will reach out to you to see how are you doing and make sure that you are in the right path.",
      image: "./assets/AI-coach.png",
      alt: "AI Personal Life Coach",
      color: "rgb(62, 129, 236)",
      gradient: "linear-gradient(rgb(2, 173, 173), rgb(8, 57, 154))",
    },
    {
      link: "https://gabrielcorderodeveloper.github.io/MyTo-doList/",
      title: "React to-do app",
      text: "Web-based task management application, utilizing local storage for seamless data persistence. This innovative solution empowers users to effortlessly organize and access their tasks across multiple sessions, enhancing productivity and efficiency.",
      image: "./assets/to-do.png",
      alt: "React to-do app",
      color: "rgb(7, 213, 99)",
      gradient: "linear-gradient(rgb(153, 153, 153), rgb(63, 107, 71))",
    },
    {
      link: "https://github.com/GabrielCorderoDeveloper/My-Portfolio",
      title: "My Portfolio",
      text: "Used UX / UI principles to make the application aesthetically pleasing and easy to use. Implemented axios and Google ReCAPTCHA on the contact form to ensure a secure and spam-free communication channel.",
      image: "./assets/portfolio.png",
      alt: "My Portfolio",
      color: "rgb(0, 203, 10)",
      gradient: "linear-gradient(rgb(151, 212, 86), rgb(13, 99, 18))",
    },
    {
      link: "https://gabrielcorderodeveloper.github.io/Summer-clock/",
      title: "Summer Clock",
      text: "Designed to display time while providing an immersive experience through dynamic and changing backgrounds. The project offers a visually appealing and engaging way to keep track of time.",
      image: "./assets/summer-clock.png",
      alt: "Summer Clock",
      color: "rgb(203, 101, 0)",
      gradient: "linear-gradient(rgb(212, 157, 86), rgb(99, 44, 13))",
    },
    {
      link: "https://github.com/GabrielCorderoDeveloper",
      title: "Coming soon",
      text: "Coming soon",
      image: "https://eckerd.org/wp-content/uploads/2022/01/image-coming-soon.jpg",
      alt: "Coming soon",
      color: "rgb(203, 41, 0)",
      gradient: "linear-gradient(rgb(167, 128, 128), rgb(99, 13, 13))",
    }
  ];

  return (
    <div
      id="projects"
      className="d-flex row align-content-between main-w-container"
    >
      <p className="col-md-12 title who-t-spacing pb-4">List of projects</p>{" "}
      {/*//1?The styling for the title belongs to WhoIAm component*/}
      {/*//1! Projects card*/}
      <div className="project-container d-flex justify-content-center flex-wrap row">
       {data.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className='mt-5 mb-5'>
            <div className="project-card">
              <div className="divSquare first right-back-animation" style={{ backgroundColor: `${project.color}` }}></div>
              <div className="divSquare third right-back-animation2" style={{ backgroundColor: `${project.color}` }}></div>

              <div className="project-card-container row mt-5 mb-5" style={{ background: `${project.gradient}` }}>
                <div className="col-md-9 project-col pt-5">
                  <h1 className="mb-4 text-white">{index === 0 ? <AiFillStar /> : ''}{project.title}</h1>
                  <p className="pe-5 text-white">{project.text}</p>
                  <button style={{ backgroundColor: `${project.color}` }} className="btn btn-lg text-white mt-3 mb-5">View<FiArrowUpRight /></button>
                </div>

                <div className="col-md-3 project-col">
                  <div className="divSquare second up-down-animation" style={{ backgroundColor: `${project.color}` }}></div>
                  <img src={project.image} alt={project.alt} className="project-img" />
                </div>
              </div>
            </div>
          </a>
        ))} 
      </div>
    </div>
  );
}

export default Projects
