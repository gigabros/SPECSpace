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
    act_id: 1,
    file_name: "Submitted-activity.pdf"
  },
  {
    act_id: 2,
    file_name: "Submitted-actidasdasdadadasdvity.pdf"
  },
  {
    act_id: 3,
    file_name: "Subm.pdf"
  },
  {
    act_id: 4,
    file_name: "Submitted-acasdasdassssssssssssssssssssssssssssssssstivity.pdf"
  },
]
const actlist = [
  {
    id: 1,
    subject: "Do Homework",
    exp: 100,
    points: 30,
    deadline: '01.01.2020'
  },
  {
    id: 1,
    subject: "dasdasdasdadasdasdada",
    exp: 100,
    points: 30,
    deadline: '01.01.2020'
  },
  {
    id: 1,
    subject: "Dasdasdadadk",
    exp: 100,
    points: 30,
    deadline: '01.01.2020'
  },
  {
    id: 1,
    subject: "dsadas sdadasd asdasd asdk",
    exp: 100,
    points: 30,
    deadline: '01.01.2020'
  },
  {
    id: 1,
    subject: "asdasd",
    exp: 100,
    points: 30,
    deadline: '01.01.2020'
  },
]

export default function Guild() {
  // const [readMore, setReadMore] = useState(false);
  const [activity,setActivity]=useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [submits,setSubmits] = useState([]);

  const posted_activity=()=>{
    axios.get('/activity')
    .then(res=>{
      setActivity(res.data.payload.data);
      forceUpdate()
    })
  }

  const get_submitted=()=>{
    axios.get('/get_list_sub/'+sessionStorage.getItem('stud_num'))
    .then(res=>{
      console.log(res.data.payload.data)
      setSubmits(res.data.payload.data)
    })
  }

  useEffect(()=>{
    posted_activity()
    get_submitted()
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

                {
                  submits != null
                  ?
                  submits.map((task) => {
                  return (
                    <div className="sub-holder" key={task.act_id}>
                      <p className="sub-file">{task.file_name}</p>
                    </div>
                  ) 
                })
                :
                <h1>No submits</h1>
              }
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
