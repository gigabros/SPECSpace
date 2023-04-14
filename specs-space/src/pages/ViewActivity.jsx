import React from 'react'
import Sidebar from '../components/Sidebar'
import { MdArrowBackIosNew } from 'react-icons/md'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom';

export default function ViewActivity() {

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
                    <Sidebar />
                </div>

                <div className="right-side">
                    <div className='View-page'>
                        <h1 className='View-title'>Activity</h1>

                        <div className="view-act-container">
                            <div className="view-act-graphic">

                            </div>
                            <div className="view-act-holder">
                                <div className="view-info-container">
                                    <div className="bck-btn-holder">
                                        <Link to="/Activity" className='lnk-btn'>
                                            <MdArrowBackIosNew size={30} className='bck-btn' />
                                        </Link>
                                    </div>

                                    <div className="view-act-info">
                                        <p className='task-title'>Do Homework</p>
                                        <p className='task-info'>+100 EXP</p>
                                        <p className='task-info'>+50 PTS</p>
                                        <p className='task-info'>3/31/2023</p>
                                        <p className='task-des'>   Ea velit quis ipsum cupidatat duis consectetur dolore commodo incididunt quis elit id ullamco excepteur. Voluptate do anim nostrud id reprehenderit irure. Quis aliqua incididunt aliquip ut amet labore velit laborum nisi esse dolor nulla. Commodo dolore pariatur tempor aliqua. Duis ullamco mollit ea commodo duis labore labore laboris do nisi. Excepteur cupidatat cupidatat cillum proident dolor dolor reprehenderit consectetur labore enim. Nostrud aliqua sunt ipsum commodo minim incididunt nulla ea duis non ullamco duis ex.</p>
                                    </div>

                                    <form className="view-file-form">
                                        <button onClick={handleClick} className='file-btn'><GoPlus/>Attach File</button>
                                        <input type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                        />
                                        <button id='submit' className='submit-btn'>Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
