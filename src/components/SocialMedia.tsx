import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import './SocialMedia.css';
import { useState, useEffect } from 'react';

interface Props {
    color: string;
    background: boolean;
}

const SocialMedia = ({ color, background }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Default styling for all the icons.
    const style = {
        color: color,
        fontSize: windowWidth < 400 ? "40px" : "50px",
    }

    //If the width of the page changes the icon size will to.
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    /*These links will be used on each icon to open a new tab with the indicated link
    if clicked. */
    type Links = {
      youtube: string;
      instagram: string;
      github: string;
      linkedin: string;
    };

    const links: Links = {
      youtube: 'https://www.youtube.com/channel/UC70Va2m-AMFg7djlFzVuM9A',
      instagram: 'https://www.instagram.com/gabriel_coder47/',
      github: 'https://github.com/GabrielCorderoDeveloper',
      linkedin: 'https://www.linkedin.com/in/gabriel-cordero-0960b9244/',
    }

  return (
    <div className={ background ? "social big social-bg" : 'social'}> {/*//1? The styles change depending if the background propierty is true*/}
        <a target="_blank" href={links.youtube}><AiFillYoutube style={style}/></a>
        <a target="_blank" href={links.instagram}><AiOutlineInstagram style={style}/></a>
        <a target="_blank" href={links.github}><AiFillGithub style={style}/></a>
        <a target="_blank" href={links.linkedin}><AiFillLinkedin style={style}/></a>
    </div>
  );
}

export default SocialMedia
