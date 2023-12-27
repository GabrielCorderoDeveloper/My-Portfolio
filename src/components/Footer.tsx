import SocialMedia from "./SocialMedia"
import './Footer.css';
import MoreModal from "./MoreModal";
import { useState } from "react";
import ContactMe from "./ContactMe";

const Footer = () => {
    //1! More modal
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    //1! Contact modal
    const [showModalContact, setShowModalContact] = useState(false);
    const handleShowModalContact = () => setShowModalContact(true);
    const handleCloseModalContact = () => setShowModalContact(false);

  return (
    <footer >
        {/*//1? Upper footer */}
        <div className="d-flex justify-content-between flex-wrap footer-father">

        <a className="col-md-4 row-spacing text-center m-auto " target='blank' href='https://drive.google.com/file/d/18hnc70iAA6Qxrp955--pNWUBJrDW3UgC/view?usp=sharing'>Resume</a>

            <div className="row col-md-4 row-spacing row-links">
                <a  onClick={handleShowModalContact}>Contact</a>
                <a  href="#whoIAm">About me</a>
                <a  href="#projects">Portfolio</a>
            </div>

            <div className="col-md-4 row-spacing row-text">
                <p>To learn more about the steps I took to build this project and my project creation process.</p>
                <a  onClick={handleShowModal}>Click here</a>
            </div>
        </div>

        {/*//1? Lower footer */}
        <hr/>
        
        <div className="d-flex align-content-center flex-wrap down-spacing">
            <p className="col-md-6">©Gabriel Cordero 2023</p>

            <div className="col-md-6">
                <SocialMedia color='#ffffff' background={false}/>
            </div>
        </div>

        <MoreModal showModal={showModal} handleCloseModal={handleCloseModal} />
        <ContactMe showModalContact={showModalContact} handleCloseModalContact={handleCloseModalContact} />
    </footer>
  )
}

export default Footer
