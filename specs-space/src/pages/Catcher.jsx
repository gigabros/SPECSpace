import { React, useEffect } from 'react'
import logo from '../components/specs_logo.png'
import sslogo from '../components/ss_logo.png'

export default function Catcher() {


    return (
        <>
            <div className="nt-page">
                <h1 className='nt-title'>404 Not Found</h1>
                <div className="nt-logo">
                    <img className="ntlogo" src={logo} />
                    <img className="ntlogo" src={sslogo} />
                </div>
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
