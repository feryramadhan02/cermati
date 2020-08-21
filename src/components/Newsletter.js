import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'

import '../assets/style/newsletter.scss'

const Newsletter = () => {
    const newsRef = useRef(null)
    const hideNewsletter = () => {
        const newsHeight = newsRef.current.offsetHeight
        newsRef.current.style.bottom = `-${newsHeight}px`
        newsRef.current.style.transition = "all 300ms ease-out"
        newsRef.current.style.zIndex = -1
    }

    return (
        <div>
            <div className="news" ref={newsRef}>
                <form>
                    <Button className="news__close" onClick={hideNewsletter}>X</Button>
                    <h4>Get latest updates in web technologies</h4>
                    <p>
                        I write articles related to web technologies, such as design trends, development
                        tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
                    </p>
                    <div className="news__input">
                        <input type="email" name="email" placeholder="Email address..."></input>
                        <Button className="news__input__count">Count me in !</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;


