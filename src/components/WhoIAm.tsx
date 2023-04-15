import './WhoIAm.css';

interface IFrameProps extends React.HTMLProps<HTMLIFrameElement> {
  frameborder?: number;
}


const WhoIAm = () => {
  return (
    <div className="d-flex row align-content-between">
      <p className='col-md-12 title who-t-spacing'>Who I am?</p>

      <div className="col-md-8 who-spacing">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/J7vB-zKAOCg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p className="col-md-4 paragraph text-darkGray who-spacing">
        I am an extremely dedicated person following his dream of become a Front
        End developer.
      </p>
    </div>
  );
}

export default WhoIAm
