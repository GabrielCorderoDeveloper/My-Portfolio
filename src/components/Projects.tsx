import './Projects.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import PumModal from './PumModal'
import { useState } from 'react';

const Projects = () => {
   //1! PumpkinDevelop modal
   const [showPumModal, setShowPumModal] = useState(false);
   const handleShowPumModal = () => setShowPumModal(true);
   const handleClosePumModal = () => setShowPumModal(false);

  const data = [
    {
      link: "https://www.figma.com/file/tRS00kCqh5nfgz47kcQux5/Sons-of-God?type=design&node-id=0%3A1&mode=design&t=4t17hWl8NsaRWlUS-1",
      title: "Hijos De Dios Page",
      text: `
      Create a website for the church group Hijos De Dios (Sons Of God) that provides information about the group, features an event calendar, and offers a convenient means of communication.`,
      image: "./assets/Sons-of-god.png",
      alt: "Sons Of God Page",
      color: "rgb(195, 128, 41)",
      gradient: "linear-gradient(rgb(192, 131, 77), rgb(255, 170, 0))",
      button: "View design"
    },
    {
      link: "",
      onClick: handleShowPumModal,
      title: "Pumpkin Develop",
      text: "Full-stack web application designed to connect small communities or businesses with developers, offering real industry experience for the developers while they develop a website with no development cost for the client.",
      image: "./assets/pumpkin.png",
      alt: "Pumpkin develop project",
      color: "#359645",
      gradient: "linear-gradient(#859651, #1e442a",
      button: "See details"
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
      <PumModal showPumModal={showPumModal} handleClosePumModal={handleClosePumModal} />
      {/*//1?The styling for the title belongs to WhoIAm component*/}
      {/*//1! Projects card*/}
      <div className="project-container d-flex justify-content-center flex-wrap row">
       {data.map((project, index) => (
          <a href={project.link ? project.link : '#p'} onClick={project.onClick && project.onClick} target={project.link ? "_blank"  : ""}  rel="noopener noreferrer" key={index} className='mt-5 mb-5 project-a'>
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
