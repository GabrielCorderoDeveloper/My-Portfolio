import './Designs.css';

const Designs = () => {

  const data = [
    {
      link: "https://www.figma.com/file/IrDQzLAK2ISdbWRbZchXsP/AI-Personal-life-coach?type=design&node-id=0-1&t=fEPzCOFK4V0RmL6H-0",
      text: "AI Personal Life Coach",
      image: "./assets/coach-design.png",
      alt: "AI Personal Life Coach"
    },
    {
      link: "https://www.figma.com/file/D6Vn2XxJnVNWPLr0QtY5sB/AI-Shopping-List?type=design&node-id=0%3A1&mode=design&t=Y1inG55jTNdXIvH9-1",
      text: "AI Shopping List",
      image: "./assets/list-design.png",
      alt: "AI Shopping List"
    },
    // {
    //   link: "https://gabrielcorderodeveloper.github.io/MyTo-doList/",
    //   text: "React to-do app",
    //   image: "./assets/to-do.png",
    //   alt: "React to-do app"
    // },
    {
      link: "https://www.figma.com/file/T1IsXnN31Z4yBmTxvUEBwg/My-portfolio-2023?type=design&node-id=0-1&t=nbB4AsJLif5AIy9o-0",
      text: "My Portfolio",
      image: "./assets/portfolio.png",
      alt: "My Portfolio"
    },
    // {
    //   link: "https://gabrielcorderodeveloper.github.io/Summer-clock/",
    //   text: "Summer Clock",
    //   image: "./assets/summer-clock.png",
    //   alt: "Summer Clock"
    // },
  ];

  return (
    <div
      id="designs"
      className="d-flex row align-content-between main-w-container"
    >
      <p className="col-md-12 title who-t-spacing">Figma designs</p>{" "}
      {/*//1?The styling for the title belongs to WhoIAm component*/}
      {/*//1! Designs card*/}
      <div className="design-container d-flex justify-content-center flex-wrap">
        {data.map((design, index) => (
          <div
            key={index}
            className="design-card col-xl-4 col-md-6 p-4 pb-0"
          >
            <div className="m-auto">
              <a href={design.link} target='about_blank'>
                <img className="design-img" src={design.image} alt={design.alt} />
                <div className={`number-square d-flex align-items-center justify-content-center ${index < 2 ? 'golden' : 'bg-lightBlack'} text-clearWhite rounded-4 pt-2`}>
                  {index + 1}
                </div>
              </a>
              <p className="">{design.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designs;
