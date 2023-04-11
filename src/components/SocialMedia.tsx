import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

interface Props {
    color: string;
    background: boolean;
}

const SocialMedia = ({ color, background }: Props) => {
    //Default styling for all the icons.
    const style = {
        color: color,
        fontSize: "50px",
    }

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
    <div className={ background ? "social social-bg" : 'social'}>
        <a target="_blank" href={links.youtube}><AiFillYoutube style={style}/></a>
        <a target="_blank" href={links.instagram}><AiOutlineInstagram style={style}/></a>
        <a target="_blank" href={links.github}><AiFillGithub style={style}/></a>
        <a target="_blank" href={links.linkedin}><AiFillLinkedin style={style}/></a>
    </div>
  );
}

export default SocialMedia
