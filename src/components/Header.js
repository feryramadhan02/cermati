import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import '../assets/style/header.scss'

const Header = () => {
    return (
        <div>
            <div className="jumbo-jumbo">
                <Jumbotron>
                    <img src={require("../assets/images/jumbo.jpg")} alt="" />
                    <div className="jumbo-jumbo__overlay">
                        <div className="jumbo-jumbo__overlay__logo">
                            <img src={require("../assets/images/logo-white.png")} alt="" />
                        </div>
                        <div className="jumbo-jumbo__overlay__introduce">
                            <h3>Hello! I'm Fery Ramadhan Cahyono</h3>
                            <h4>Consult, Design, and Develop Websites</h4>
                            <p>Have something great in mind? Feel free to contact me.</p>
                            <p>I'll help you to make it happen.</p>
                            <div className="jumbo-jumbo__overlay__introduce__button">
                                <Button className="primary">LET'S MAKE CONTACT</Button>
                            </div>
                        </div>
                    </div>


                </Jumbotron>
            </div>
        </div>
    );
}

export default Header;