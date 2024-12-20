import React from 'react'
import Sidebar from '../components/Sidebar'
import { MdArrowBackIosNew } from 'react-icons/md'
import { GoPlus } from 'react-icons/go'
import { FiCheckSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { useState, useReducer, useEffect } from 'react'

export default function ViewActivity() {

    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        event.preventDefault()
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
    const [altfile, setAltfile] = useState()
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    // const [check,setCheck]= useState();
    var check;

    const chech_submit = () => {
        axios.get('/chech_dupe/' + sessionStorage.getItem('stud_num') + '/' + sessionStorage.getItem('act_id'))
            .then(res => {

                check = res.data
            })
    }

    const get_activity = () => {
        axios.get('/select_activity/' + sessionStorage.getItem('act_id'))
            .then(res => {
                setId(res.data.payload.data[0].id)
                setSubject(res.data.payload.data[0].subject)
                setDescription(res.data.payload.data[0].description)
                setDeadline(res.data.payload.data[0].deadline)
                setPoints(res.data.payload.data[0].points)
                setExp(res.data.payload.data[0].exp)
                forceUpdate()


            })
    }
    useEffect(() => {
        get_activity()
        chech_submit()
        check_if_submit()
    }, [])
    const check_submit = () => {

    }
    const submit = async (e) => {
        e.preventDefault();
        const submitting = await axios.post('/submit', {
            id: sessionStorage.getItem('act_id'),
            stud_num: sessionStorage.getItem('stud_num'),
            attachment: null,
            name: sessionStorage.getItem('name')
        })
            .then(res => {

                alert("Submition Success")
            }).catch(error => {
                console.log(error)
                alert("Error")
            })
    }

    const [picture, setPicture] = useState(null);

    const handleFileInput = (event) => {
        event.preventDefault();
        setPicture(event.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', picture);
        formData.append('act_id', sessionStorage.getItem('act_id'))
        formData.append('stud_num', sessionStorage.getItem('stud_num'))
        formData.append('name', sessionStorage.getItem('first_name') + ", " + sessionStorage.getItem('last_name'))


        axios.post('/file_upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {

            if (response.data == "Submitted Success Fully") {
                alert("Submitted Successfuly")
            } else if (response.data == "No Files") {
                alert("No Attached File")
            } else if (response.data == "Resubmitted Successfuly") {
                alert("Resubmitted Successfuly")
            }
            else {
                alert("Server Error")
            }
        }).catch((error) => {
            alert("Server please try again later")
        });
        // }


    }
    const [bool, setBool] = useState(false)
    const check_if_submit = () => {
        axios.get('/check_if_submit/' + sessionStorage.getItem('stud_num') + "/" + sessionStorage.getItem('act_id'))
            .then(res => {
                if (res.data.payload.data[0].status == 1 || res.data.payload.data[0].status == 2) {
                    setAltfile(res.data.payload.data[0].file_name)
                }
                if (res.data.payload.data[0].status == 0 || res.data.payload.data[0].status == 2) {
                    setBool(true)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
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
                                        <Link to="/Student/Activity" className='lnk-btn'>
                                            <MdArrowBackIosNew size={30} className='bck-btn' />
                                        </Link>
                                    </div>

                                    <div className="view-act-info">
                                        <p className='task-title'>{subject}</p>
                                        <p className='task-info'>{exp} EXP</p>
                                        <p className='task-info'>{points} PTS</p>
                                        <p className='task-info'>Deadline: {deadline}</p>
                                        <p className='task-des'>{description}</p>
                                        {
                                            picture != null
                                                ?
                                                <p className='task-des'>{picture.name}</p>

                                                :
                                                altfile != null
                                                    ?
                                                    <p className='task-des'>{altfile}</p>
                                                    :
                                                    <p className='task-des'>No Files Attached</p>
                                        }
                                    </div>

                                    <form className="view-file-form">
                                        <button onClick={handleClick} className='file-btn'><GoPlus />Attach File</button>
                                        <input type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleFileInput}
                                            style={{ display: 'none' }}
                                        />
                                        {
                                            bool == true
                                                ?
                                                <p className='task-check'>Checked <FiCheckSquare className='check-icon'/></p>
                                                :
                                                altfile != null
                                                    ?
                                                    <button onClick={handleSubmit} id='submit' className='submit-btn'>Re-submit</button>
                                                    :
                                                    <button onClick={handleSubmit} id='submit' className='submit-btn'>Submit</button>
                                        }

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
