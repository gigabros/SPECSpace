import { React, useEffect } from 'react'
import logo from '../components/specs_logo.png'
import sslogo from '../components/ss_logo.png'
import FeedbackModal from '../components/FeedbackModal'
import { FiAlertTriangle } from 'react-icons/fi'

export default function Catcher() {

    const closePopup = () => {
        const popup = document.querySelector('.fbck-modal-overlay');
        popup.style.display = 'none';
      }
    return (
        <>
            <div className="nt-page">
                <h1 className='nt-title'>404 Not Found</h1>
                <div className="nt-logo">
                    <img className="ntlogo" src={logo} />
                    <img className="ntlogo" src={sslogo} />
                </div>
                <FeedbackModal fbckIcon={<FiAlertTriangle size={100}/>} message="Message" onClose={closePopup}/>
                <div className="ad-log-area">
                    <ul className="ad-circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
