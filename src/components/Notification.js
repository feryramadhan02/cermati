import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'

import '../assets/style/notification.scss'
import '../assets/style/responsive.scss'

const Notification = () => {
    const notifRef = useRef(null)
    const hideNotif = () => {
        const notifHeight = notifRef.current.offsetHeight
        notifRef.current.style.marginTop = `-${notifHeight}px`
        notifRef.current.style.transition = "all 300ms ease-out"
    }

    return (
        <div>
            <div className="notif" ref={notifRef}>
                <p>
                    By accessing and using this website, you acknowledge that you have read and
                    understand our <span>Cookie Policy, Privacy Policy,</span> and our <span>Terms of Service.</span>
                </p>
                <Button className="notif__hidenotif" onClick={hideNotif} >Got it</Button>
            </div>
        </div>
    );
}

export default Notification;




