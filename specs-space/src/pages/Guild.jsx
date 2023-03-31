import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const quest = [

  {
    questID: "1",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Do Software Engineering Module 1",
    exp: 100,
  },
  {
    questID: "2",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Do Software Engineering Module 1",
    exp: 100,
  },
  {
    questID: "3",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Do Software Engineering Module 1",
    exp: 100,
  },
  {
    questID: "1",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Do Software Engineering Module 1",
    exp: 100,
  },
]

export default function Guild() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">

          <div className='quest-page'>
            <h1 className='quest-title'>CSS Quest</h1>
            <div className="task-list">
              {
                quest != null
                  ?
                  quest.map((task) => {
                    return (
                      <div className="task-content" key={task.questID}>
                        <div className="task-holder">
                          <p className='task-title'>{task.title} </p>
                          <p className='task-des'>{task.deadline}</p>
                          <p className='task-des'>{task.description}</p>
                        </div>
                        <div className="task-exp">
                          <p>EXP:{task.exp}</p>
                        </div>
                        <div className="task-btn">
                          {/* <GiTrashCan onClick={() => deleteTask(task.questID)} size={30} className='cls-btn' />
                          <MdOutlineCheckCircleOutline onClick={() => finishtask(task.questID)} size={30} className='cls-btn' /> */}
                          <GiTrashCan size={30} className='del-btn' />
                          <MdOutlineCheckCircleOutline size={30} className='fin-btn' />
                        </div>
                      </div>
                    )
                  })
                  :
                  <h1>No Quest!</h1>
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
