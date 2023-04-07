import React from 'react'
import AdSidebar from '../components/AdSidebar'
import { MdArrowBackIosNew, MdCheck, MdFileDownload } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const submitted = [

    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
    {
        auth: "Anya Forger",
        file: "Forger.Anya_Activity.pdf",
        date: "3/31/2023",
    },
]

export default function Submits() {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    return (
        <>
            <div className="page-container">
                <div className="left-side">
                    <AdSidebar />
                </div>

                <div className="right-side">
                    <div className='Submit-page'>
                        <h1 className='Submit-title'>Submitted Works</h1>

                        <div className="submit-act-container">
                            <div className="submit-act-graphic">

                            </div>
                            <div className="submit-act-holder">
                                <div className="submit-list">
                                    {
                                        submitted != null
                                            ?
                                            submitted.map((item) => {
                                                return (
                                                    <>
                                                        <div className="submit-holder">
                                                            <div className="submit-header">
                                                                <p className='submit-auth'>{item.auth} </p>
                                                                <p className='submit-date'>Date Submitted: {item.date} </p>
                                                            </div>
                                                            <div className="submit-file-container">
                                                                <button id='dwnld' className='submit-btn-holder'><MdFileDownload size={20} className='dwnld-btn' /></button>
                                                                <p className='submit-file'>{item.file}</p>
                                                                <button id='correct' className='submit-btn-holder'><MdCheck size={20} className='correct-btn' /></button>
                                                                <button id='wrong' className='submit-btn-holder'><BsPlusLg size={20} className='wrong-btn' /></button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                            :
                                            <h1>No Submits!</h1>
                                    }
                                </div>
                                <div className="submit-info-container">
                                    <div className="bck-btn-holder">
                                        <Link to="/Adquest" className='lnk-btn'>
                                            <MdArrowBackIosNew size={30} className='bck-btn' />
                                        </Link>
                                    </div>

                                    <div className="submit-act-info">
                                        <p className='task-title'>Do Homework</p>
                                        <p className='task-info'>+100 EXP</p>
                                        <p className='task-info'>+50 PTS</p>
                                        <p className='task-info'>3/31/2023</p>
                                        <p className='task-des'>   Ea velit quis ipsum cupidatat duis consectetur dolore commodo incididunt quis elit id ullamco excepteur. Voluptate do anim nostrud id reprehenderit irure. Quis aliqua incididunt aliquip ut amet labore velit laborum nisi esse dolor nulla. Commodo dolore pariatur tempor aliqua. Duis ullamco mollit ea commodo duis labore labore laboris do nisi. Excepteur cupidatat cupidatat cillum proident dolor dolor reprehenderit consectetur labore enim. Nostrud aliqua sunt ipsum commodo minim incididunt nulla ea duis non ullamco duis ex.</p>
                                    </div>

                                    <div className="rmv-file">
                                        <button className='rmv-btn'>Remove</button>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
