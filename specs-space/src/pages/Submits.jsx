import React, { useState, useReducer, useEffect } from 'react'
import AdSidebar from '../components/AdSidebar'
import { MdArrowBackIosNew, MdCheck, MdFileDownload } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { Link,useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Submits() {

    const hiddenFileInput = React.useRef(null);
    const [id, setId] = useState()
    const [subject, setSubject] = useState()
    const [description, setDescription] = useState()
    const [attachment, setAtteachment] = useState()
    const [deadline, setDeadline] = useState()
    const [points, setPoints] = useState()
    const [exp, setExp] = useState()
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [data, setData] = useState([]);

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
        sub_list()
        console.log(data)
    }, [])

    const sub_list = () => {
        axios.get('/get_list_submits/' + sessionStorage.getItem('act_id'))
            .then(
                res => {
                    setData(res.data.payload.data)
                    console.log(res.data.payload.data)
                }
            )
    }
    const handleDownload = (act,stud,filename) =>{
        axios({
            url: '/download/' + act + '/' + stud,
            method: 'GET',
            responseType: 'blob'
          })
          .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
          })
          .catch(error => {
            console.log(error);
          });
    }
    // const [act_id,setAct_id]
    const finish = async (id, stud_num) => {
        axios.post('/finish', {
            act_id: id,
            stud_num: stud_num
        }).then(res => {
            alert("Finished")
            sub_list()
        }).catch(error => {
            alert("error")
            console.log(error)
        })

    }
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };


    const navi = useNavigate();
    const nav_act = () => navi('/Adquest')

    const delete_act = async () => {
        const delete_now = await axios.post('/delete_act', {
            act_id: sessionStorage.getItem('act_id')
        }).then(res => {
            console.log(res)
            nav_act()
        }).catch(error => {
            console.log(error)
        })
       
    }

    const delete_submit=async(act_id,stud_num)=>{
        const delete_sub = await axios.post('/reject_submit',{
            act_id: act_id,
            stud_num: stud_num
        }).then(res=>{
            console.log(res)
            sub_list()
        }).catch(error=>{
            console.log(error)
        })
    }
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
                                        data != null
                                            ?
                                            data.map((item) => {
                                                return (
                                                    <>
                                                        <div className="submit-holder">
                                                            <div className="submit-header">
                                                                <p className='submit-auth'>{item.name} </p>
                                                                <p className='submit-date'>Date Submitted: {item.date} </p>
                                                            </div>
                                                            <div className="submit-file-container">
                                                                <button onClick={()=> handleDownload(item.act_id,item.stud_num,item.file_name)} id='dwnld' className='submit-btn-holder'><MdFileDownload size={20} className='dwnld-btn' /></button>
                                                                <p className='submit-file'>{item.file}</p>
                                                                <button onClick={() => finish(item.act_id, item.stud_num)} id='correct' className='submit-btn-holder'><MdCheck size={20} className='correct-btn' /></button>
                                                                <button onClick={()=>delete_submit(item.act_id,item.stud_num)} id='wrong' className='submit-btn-holder'><BsPlusLg size={20} className='wrong-btn' /></button>
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
                                        <p className='task-title'>{subject}</p>
                                        <p className='task-info'>{exp}</p>
                                        <p className='task-info'>{points}</p>
                                        <p className='task-info'>{deadline}</p>
                                        <p className='task-des'>{description}</p>
                                    </div>

                                    <div className="rmv-file">
                                        <button onClick={()=>delete_act()} className='rmv-btn'>Remove</button>
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
