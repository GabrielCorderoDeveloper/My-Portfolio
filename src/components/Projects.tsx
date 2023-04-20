import './Projects.css';

const Projects = () => {

  const data = [
    {
      link: "https://www.google.com",
      text: "How to afford a tesla",
      image: "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
    },
    {
      link: "https://www.facebook.com",
      text: "Facebook",
      image: "https://via.placeholder.com/150"
    },
    {
      link: "https://www.twitter.com",
      text: "Twitter",
      image: "https://via.placeholder.com/150"
    },
    {
      link: "https://www.instagram.com",
      text: "Instagram",
      image: "https://via.placeholder.com/150"
    },
    {
      link: "https://www.linkedin.com",
      text: "LinkedIn",
      image: "https://via.placeholder.com/150"
    }
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
          <div key={index} className="project-card col-xl-4 col-md-6 p-4 pb-0" style={{marginTop: `${(index + 1) * 15}px`}}>
            <div className='m-auto'>
              <a href={project.link}>
                <img className="project-img" src={project.image} alt="" />
                <div className="number-square d-flex align-items-center justify-content-center bg-lightBlack text-clearWhite rounded-4 pt-2">
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
