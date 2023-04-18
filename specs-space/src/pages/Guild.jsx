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

const quest = [

  {
    questID: "1",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Minim excepteur mollit laborum dolore sit excepteur consequat. Reprehenderit non reprehenderit occaecat culpa aliquip amet. Non duis voluptate quis ex. Dolore quis labore quis sunt sunt magna dolor commodo est nisi sint sint commodo. Pariatur enim ea magna ad exercitation pariatur dolor aute pariatur. Reprehenderit mollit quis cupidatat in consequat officia voluptate fugiat. Nostrud incididunt deserunt velit anim nostrud eiusmod est minim amet nisi veniam.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "2",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "3",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "4",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Minim excepteur mollit laborum dolore sit excepteur consequat. Reprehenderit non reprehenderit occaecat culpa aliquip amet. Non duis voluptate quis ex. Dolore quis labore quis sunt sunt magna dolor commodo est nisi sint sint commodo. Pariatur enim ea magna ad exercitation pariatur dolor aute pariatur. Reprehenderit mollit quis cupidatat in consequat officia voluptate fugiat. Nostrud incididunt deserunt velit anim nostrud eiusmod est minim amet nisi veniam.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "5",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "6",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "7",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "8",
    subject: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
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
