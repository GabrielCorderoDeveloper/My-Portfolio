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
      link: "https://somoshijosdedios.com/",
      title: "Hijos De Dios Page",
      text: `
      Led the end-to-end design and development of a dynamic and responsive website for Hijos De Dios, used by tens of users on a regular basis.
      Conducted user testing with more than 15 users to ensure optimal functionality, resulting in resolving any issues to deliver a polished, high-performance website.
      Introduced dynamic English to Spanish real-time translation, expanding the website's reach by 50%.`,
      tags: ['React','React Routing','SASS','JavaScrip','AXIOS','i18next','HTML'],
      image: "./assets/Sons-of-god.png",
      alt: "Sons Of God Page",
      color: "rgb(195, 128, 41)",
      gradient: "linear-gradient(rgb(192, 131, 77), rgb(255, 170, 0))",
    },
    {
      link: "",
      onClick: handleShowPumModal,
      title: "Pumpkin Develop",
      text: "Full-stack web application designed to connect small communities or businesses with developers, offering real industry experience for the developers while they develop a website with no development cost for the client.",
      tags: ['React','React Routing','SASS','Node JS','Express','SQL','DotENV','JavaScrip','AXIOS','HTML'],
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
      tags: ['React','Typescript','SASS','Node JS','Express','SQL','DotENV','Vite','JavaScrip','AXIOS','HTML'],
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
      <p className="col-md-12 title who-t-spacing pb-4">My work</p>{" "}
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
                  <div className='project_tags'>
                    {project.tags.map(tag => (
                      <div className='pro_tag'>{tag}</div>
                    ))}
                  </div>
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
