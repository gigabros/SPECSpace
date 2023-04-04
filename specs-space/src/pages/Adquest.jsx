import React from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
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

export default function Adquest() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <AdSidebar />
        </div>

        <div className="right-side">
          <div className='adquest-page'>
            <h1 className='adquest-title'>Quest</h1>
            <div className="adquest-container">
              <div className="adtask-list">
                {
                  quest != null
                    ?
                    quest.map((task) => {
                      return (
                        <div className="adtask-content" key={task.questID}>
                          <div className="adtask-holder">
                            <p className='adtask-title'>{task.title} </p>
                            <p className='adtask-des'>{task.deadline}</p>
                            <p className='adtask-des'>{task.description}</p>
                          </div>
                          <div className="adtask-exp">
                            <p>EXP:{task.exp}</p>
                          </div>
                          <div className="adtask-btn">
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

              
              <div className="add-task-holder">
                <form className='add-task-form'>

                  <h1 className='adtask-list-title'>Add Quest</h1>
                  <input type="text" placeholder='Add Quest Title' id='title' />
                  <input type="date" id='date' />
                  <input type="text" placeholder='Quest Description' id='description' />
                  <div className='btn-holder'>
                    <button id="submit" className='submit-btn'>Add Task</button>
                    <button className='cancel-btn'>Cancel</button>
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
