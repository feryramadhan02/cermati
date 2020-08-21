import React from 'react'
import Cards from '../components/Cards'


import '../assets/style/homepage.scss'
import '../assets/style/responsive.scss'

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
            </div>
        </div>
    );
}

export default HomePage;




