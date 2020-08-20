import React from 'react'
import Cards from '../components/Cards'
import Button from 'react-bootstrap/Button'


import '../assets/style/homepage.scss'

const HomePage = () => {
    return (
        <div>
            <div className="highlights">
                <div className="highlights__header">
                    <h3>How Can I Help You?</h3>
                    <p>Our work then targeted, best practices outcomes social innovation synergy.</p>
                    <p>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered</p>
                    <p>program areas scale.</p>
                </div>
                <div className="highlights__header__tiles">
                    <Cards />
                </div>
                <div className="newsletter" style={{
                    bottom: "0",
                    left: "0",
                    width: "640px",
                    height: "170px",
                    position: "absolute",
                    zIndex: "999",
                    background: "#2791ce75"
                }}>
                    <form>
                        <Button>X</Button>
                        <h4>Get latest updates in web technologies</h4>
                        <p>
                            I write articles related to web technologies, such as design trends, development
                            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
                    </p>
                        <input type="text" name="email" placeholder="Email address..."></input>
                        <Button style={{ color: "black", background: "yellow" }}>Count me in !</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomePage;




