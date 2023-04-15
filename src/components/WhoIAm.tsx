import './WhoIAm.css';

interface IFrameProps extends React.HTMLProps<HTMLIFrameElement> {
  frameborder?: number;
}


const WhoIAm = () => {
  return (
    <div className="d-flex row align-content-between main-w-container">
      <p className='col-md-12 title who-t-spacing'>Who I am?</p>

      <div className="col-md-8 who-spacing">
        <iframe
          className='responsive-iframe'
          // width={840}
          // height={472.5}
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
