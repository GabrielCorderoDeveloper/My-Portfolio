import SocialMedia from "./SocialMedia"
import './Footer.css';
import MoreModal from "./MoreModal";
import { useState } from "react";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  return (
    <footer className="bg-secondaryColor">
        {/*//1? Upper footer */}
        <div className="d-flex justify-content-between flex-wrap footer-father">
            <div className="row col-md-4 row-spacing row-links">
                <a className="text-darkBlue" href="#">Contact</a>
                <a className="text-darkBlue" href="#whoIAm">About me</a>
                <a className="text-darkBlue" href="#projects">Portfolio</a>
            </div>

            <p className="col-md-4 row-spacing text-darkGray">
            This portfolio is made using the following technologies:
                <li>HTML</li>
                <li>CSS</li>
                <li>Typescript</li>
                <li>JSX</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>React Icons</li>
            </p>

            <div className="col-md-4 row-spacing row-text">
                <p className="text-darkGray">To know more how this project was build step and how I create projects.</p>
                <a className="text-darkBlue" onClick={handleShowModal}>Click here</a>
            </div>
        </div>

        {/*//1? Lower footer */}
        <hr/>
        
        <div className="d-flex align-content-center flex-wrap down-spacing">
            <p className="col-md-6">©Gabriel Cordero 2023</p>

            <div className="col-md-6">
                <SocialMedia color='#1E2B32' background={false}/>
            </div>
        </div>

        <MoreModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </footer>
  )
}

export default Footer
