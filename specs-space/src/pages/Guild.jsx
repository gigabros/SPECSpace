import React, { useState } from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { BsChevronExpand } from 'react-icons/bs'


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
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Minim excepteur mollit laborum dolore sit excepteur consequat. Reprehenderit non reprehenderit occaecat culpa aliquip amet. Non duis voluptate quis ex. Dolore quis labore quis sunt sunt magna dolor commodo est nisi sint sint commodo. Pariatur enim ea magna ad exercitation pariatur dolor aute pariatur. Reprehenderit mollit quis cupidatat in consequat officia voluptate fugiat. Nostrud incididunt deserunt velit anim nostrud eiusmod est minim amet nisi veniam.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "2",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "3",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "4",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Minim excepteur mollit laborum dolore sit excepteur consequat. Reprehenderit non reprehenderit occaecat culpa aliquip amet. Non duis voluptate quis ex. Dolore quis labore quis sunt sunt magna dolor commodo est nisi sint sint commodo. Pariatur enim ea magna ad exercitation pariatur dolor aute pariatur. Reprehenderit mollit quis cupidatat in consequat officia voluptate fugiat. Nostrud incididunt deserunt velit anim nostrud eiusmod est minim amet nisi veniam.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "5",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "6",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "7",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "8",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "9",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "10",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "11",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
  {
    questID: "12",
    title: "Do Homework",
    deadline: "3/31/2023",
    description: "Lorem cupidatat elit mollit esse quis ut excepteur aute nulla. Cillum voluptate duis esse minim amet voluptate nulla laborum ex voluptate do labore minim. Eu proident anim culpa veniam nulla ut culpa dolore pariatur pariatur est exercitation proident. Exercitation aute eiusmod culpa reprehenderit dolor aliqua nostrud id eiusmod ex. In ex id labore ex ut id eu excepteur incididunt duis eu consequat.",
    exp: 100,
    pts: 50,
  },
]



export default function Guild() {
  // const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">

          <div className='quest-page'>
            <h1 className='quest-title'>CSS Quest</h1>

            <div className="quest-page-container">
              <div className="task-list">
                {
                  quest != null
                    ?
                    quest.map((task) => {
                      return (
                        <>
                          <div className="task-card-holder">
                            <div className="task-card" key={task.questID}>
                              <input type="checkbox" id={task.questID} className='hide' />

                              <div className="task-header">
                                <p className='task-title'>{task.title} </p>
                                <div className="task-container">
                                  <div className="task-des-holder">
                                    <p className='task-des'>+{task.exp} exp</p>
                                    <p className='task-des'>+{task.pts} points</p>
                                    <p className='task-des'>{task.deadline}</p>

                                  </div>
                                  <div className="task-exp">
                                    <label htmlFor={task.questID} className='btn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                                  </div>
                                </div>

                              </div>

                              <div className="task-info">
                                <p className='task-des'>{task.description}</p>
                              </div>


                            </div>

                            <div className="task-btn">

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
