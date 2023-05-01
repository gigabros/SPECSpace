import React, { useState, useReducer, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import axios from '../api/axios';
import logo from '../components/specs_logo.png'
const sub = [
  {
    id: 1,
    subject: "Yurrrrrrr",
    deadline: "01.03.2020",
    exp: 20,
    points: 20
  },
]

export default function Adquest() {

  const [data, setData] = useState({
    title: "",
    deadline: null,
    exp: null,
    pts: null,
    description: ""

  });
  const [activities, setAcitivities] = useState([])
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const list_act = () => {
    axios.get('/activity')
      .then(res => {
        setAcitivities(res.data.payload.data);
        console.log(activities)
      })
  }
  useEffect(() => {
    list_act()
  }, [])
  const pact = async (e) => {
    e.preventDefault();
    const posting = await axios.post('/add_activity', {
      subject: data.title,
      description: data.description,
      deadline: data.deadline,
      points: data.pts,
      exp: data.exp
    }).then(res => {
      alert("Activity Successfully Added")
      list_act()
    }).catch(error => {
      alert("error")
    })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const get_id = async (id) => {
    sessionStorage.setItem('act_id', id)
  }

  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <AdSidebar />
        </div>

        <div className="right-side">

          <div className='quest-page'>
            <h1 className='quest-title'>Activities</h1>

            <div className="quest-page-container">
              <div className="task-list">
                {
                  activities != null
                    ?
                    activities.map((task) => {
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
                              <Link to="/Submits" className='link-btn'>
                                <button onClick={() => get_id(task.id)} className='entr-btn'>Enter</button>
                              </Link>
                            </div>

                          </div>
                        </>
                      )
                    })
                    :
                    <div className="act-empty">
                      <div className="empty-act-holder">
                        <img src={logo} alt="specs logo" className='empty-act' />
                      </div>
                      <h1 className='empty-act-des'>No Activities!</h1>
                    </div>
                }
              </div>

              <div className="add-act-holder">
                <h1 className='add-act-title'>Add Activity</h1>
                <form className='add-act-form'>
                  <label htmlFor="title" className='add-act-label'>activity title:</label>
                  <input onChange={(e) => handle(e)} value={data.title} type="text" id='title' />
                  <label htmlFor="deadline" className='add-act-label'>activity deadline:</label>
                  <input onChange={(e) => handle(e)} value={data.deadline} type="date" id='deadline' />
                  <div className="exp-pts-input">
                    <div className="exp-pts-holder">
                      <label htmlFor="exp" className='add-act-label'>exp:</label>
                      <input onChange={(e) => handle(e)} value={data.exp} type="number" id='exp' />
                    </div>
                    <div className="exp-pts-holder">
                      <label htmlFor="pts" className='add-act-label'>points:</label>
                      <input onChange={(e) => handle(e)} value={data.pts} type="number" id='pts' />
                    </div>
                  </div>
                  <label htmlFor="description" className='add-act-label'>activity description:</label>
                  <input onChange={(e) => handle(e)} value={data.description} type="text" id='description' />
                  <div className='btn-holder'>
                    <button onClick={pact} id="submit" className='submit-btn'>Add</button>
                    <button onClick={pact} className='cancel-btn'>Cancel</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
