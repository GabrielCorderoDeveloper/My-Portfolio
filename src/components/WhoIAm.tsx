import './WhoIAm.css';

const WhoIAm = () => {
  return (
    <div className="d-flex row align-content-between main-w-container">
      <p className='col-md-12 title who-t-spacing'>Who I am?</p>

      <div className="col-md-8 who-spacing">
        <iframe
          className='responsive-iframe'
          // The properties width and height are not defined becouse they will be set in a responsive manner using css.
          src="https://www.youtube.com/embed/J7vB-zKAOCg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p className="col-md-4 paragraph text-darkGray who-spacing d-flex align-items-center">
        I am an extremely dedicated person following his dream of become a Front
        End developer.
      </p>
    </div>
  );
}

export default WhoIAm
