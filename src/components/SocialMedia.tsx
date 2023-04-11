import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

interface Props {
    color: string;
    background: boolean;
}
const SocialMedia = ({ color, background }: Props) => {
    const style = {
        color: color,
        fontSize: "50px",
    }

  return (
    <div className={ background ? "social social-bg" : 'social'}>
        <a href="#"><AiFillYoutube style={style}/></a>
        <a href="#"><AiOutlineInstagram style={style}/></a>
        <a href="#"><AiFillGithub style={style}/></a>
        <a href="#"><AiFillLinkedin style={style}/></a>
    </div>
  );
}

export default SocialMedia
