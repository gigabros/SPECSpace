import React from 'react'
import Sidebar from '../components/Sidebar'
import { MdArrowBackIosNew } from 'react-icons/md'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { useState, useReducer } from 'react'

export default function ViewActivity() {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    const [id, setId] = useState()
    const [subject, setSubject] = useState()
    const [description, setDescription] = useState()
    const [attachment, setAtteachment] = useState()
    const [deadline, setDeadline] = useState()
    const [points, setPoints] = useState()
    const [exp, setExp] = useState()
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const get_activity = axios.get('/select_activity/' + sessionStorage.getItem('act_id'))
        .then(res => {
            setId(res.data.payload.data[0].id)
            setSubject(res.data.payload.data[0].subject)
            setDescription(res.data.payload.data[0].description)
            setDeadline(res.data.payload.data[0].deadline)
            setPoints(res.data.payload.data[0].points)
            setExp(res.data.payload.data[0].exp)
            forceUpdate()
            console.log(res.data.payload.data[0].description)

        })

    return (
        <>
            <div className="page-container">
                <div className="left-side">
                    <Sidebar />
                </div>

                <div className="area">
                    <ul class="circles">
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
                                        <p className='task-title'>{subject}Title</p>
                                        <p className='task-info'>{exp} EXP</p>
                                        <p className='task-info'>{points} PTS</p>
                                        <p className='task-info'>{deadline}xx.xx.xxxx</p>
                                        <p className='task-des'>{description} Lorem ipsum dolor sit amet consectetur </p>
                                    </div>

                                    <form className="view-file-form">
                                        <button onClick={handleClick} className='file-btn'><GoPlus />Attach File</button>
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