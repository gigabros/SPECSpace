import React, { useState,useReducer,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { BsChevronExpand } from 'react-icons/bs'
import axios from '../api/axios'

const submittedact = [
  {
    title: "Do Homework",
    file: "Submitted-activity.pdf"
  },
  {
    title: "Do Homework",
    file: "Submitted-activity.pdf"
  },
  {
    title: "Do Homework",
    file: "Submitted-activity.pdf"
  },
]

export default function Guild() {
  // const [readMore, setReadMore] = useState(false);
  const [activity,setActivity]=useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const posted_activity=()=>{
    axios.get('/activity')
    .then(res=>{
      setActivity(res.data.payload.data);
      forceUpdate()
    })
  }
  useEffect(()=>{
    posted_activity()
  },[])
  const get_id = async (id)=>{
    sessionStorage.setItem('act_id',id)
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

          <div className='quest-page'>
            <h1 className='quest-title'>Activities</h1>

            <div className="quest-page-container">
              <div className="task-list">
                {
                  activity != null
                    ?
                    activity.map((task) => {
                      return (
                        <>
                          <div className="task-card-holder">
                            <div className="task-card" key={task.id}>
                              <div className="task-header">
                                <p className='task-title'>{task.subject} </p>
                                <div className="task-container">
                                  <div className="task-des-holder">
                                    <p className='task-des'>+{task.exp} EXP</p>
                                    <p className='task-des'>+{task.points} PTS</p>
                                    <p className='task-des'>{task.deadline}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="task-btn">
                              <Link to="/ViewActivity" className='link-btn'>
                                <button className='entr-btn'
                                onClick={()=> get_id(task.id)}>Enter</button>
                              </Link>
                            </div>

                          </div>
                        </>
                      )
                    })
                    :
                    <h1>No Quest!</h1>
                }
              </div>

              <div className="submitted-act">
                <h1 className='submitted-act-title'>Submitted Activities</h1>

                {submittedact.map((task, index) => {
                  return (
                    <div className="sub-holder" key={index}>
                      <p className="sub-title">{task.title}</p>
                      <p className="sub-file">{task.file}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
