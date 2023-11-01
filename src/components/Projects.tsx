import './Projects.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const Projects = () => {

  const data = [
    {
      link: "https://www.figma.com/file/tRS00kCqh5nfgz47kcQux5/Sons-of-God?type=design&node-id=0%3A1&mode=design&t=4t17hWl8NsaRWlUS-1",
      title: "Sons Of God Page",
      text: "Coming soon",
      image: "./assets/Sons-of-god.png",
      alt: "Sons Of God Page",
      color: "rgb(195, 128, 41)",
      gradient: "linear-gradient(rgb(192, 131, 77), rgb(255, 170, 0))",
      button: "Soon"
    },
    {
      link: "https://github.com/GabrielCorderoDeveloper",
      title: "Coming soon",
      text: "Coming soon",
      image: "https://eckerd.org/wp-content/uploads/2022/01/image-coming-soon.jpg",
      alt: "Coming soon",
      color: "rgb(89, 49, 49)",
      gradient: "linear-gradient(rgb(161, 161, 161), rgb(29, 29, 29)",
      button: "Soon"
    },
    {
      link: "https://ailifementor.com/",
      title: "AI Personal Life Coach",
      text: "AI Personal Life Coach© is a personal coach that will adapt itself to fit your needs and help you achieve any realistic goal. It is powered by the ChatGPT API. It has successfully impacted and positively influenced the lives of more than 100 users.",
      image: "./assets/AI-coach.png",
      alt: "AI Personal Life Coach",
      color: "rgb(62, 129, 236)",
      gradient: "linear-gradient(rgb(2, 173, 173), rgb(8, 57, 154))",
    }
  ];

  return (
    <div
      id="projects"
      className="d-flex row justify-content-center main-w-container"
    >
      <p className="col-md-12 title who-t-spacing pb-4">List of projects</p>{" "}
      {/*//1?The styling for the title belongs to WhoIAm component*/}
      {/*//1! Projects card*/}
      <div className="project-container d-flex justify-content-center flex-wrap row">
       {data.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className='mt-5 mb-5 project-a'>
            <div className="project-card">
              <div className="divSquare first right-back-animation" style={{ backgroundColor: `${project.color}` }}></div>
              <div className="divSquare third right-back-animation2" style={{ backgroundColor: `${project.color}` }}></div>

              <div className="project-card-container row mt-5 mb-5" style={{ background: `${project.gradient}` }}>
                <div className="col-md-9 project-col pt-5">
                  <h1 className="mb-4 text-white">{index < 2 ? <AiFillStar /> : ''}{project.title}</h1>
                  <p className="pe-5 text-white">{project.text}</p>
                  <button style={{ backgroundColor: `${project.color}` }} className="btn btn-lg text-white mt-3 mb-5">{project.button ? project.button : 'View' }<FiArrowUpRight /></button>
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
