import React from 'react'
import { Link } from 'react-router-dom';
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

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

export default function Adquest() {
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
                  quest != null
                    ?
                    quest.map((task) => {
                      return (
                        <>
                          <div className="task-card-holder">
                            <div className="task-card" key={task.questID}>
                              <div className="task-header">
                                <p className='task-title'>{task.title} </p>
                                <div className="task-container">
                                  <div className="task-des-holder">
                                    <p className='task-des'>+{task.exp} EXP</p>
                                    <p className='task-des'>+{task.pts} PTS</p>
                                    <p className='task-des'>{task.deadline}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="task-btn">
                              <Link to="/Submits" className='link-btn'>
                                <button className='entr-btn'>Enter</button>
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

              <div className="add-act-holder">
                <h1 className='add-act-title'>Add Activity</h1>
                <form className='add-act-form'>
                  <label htmlFor="title" className='add-act-label'>actitivty title:</label>
                  <input type="text" id='title' />
                  <label htmlFor="deadline" className='add-act-label'>actitivty deadline:</label>
                  <input type="date" id='deadline' />
                  <div className="exp-pts-input">
                    <div className="exp-pts-holder">
                      <label htmlFor="exp" className='add-act-label'>exp:</label>
                      <input type="text" id='exp' />
                    </div>
                    <div className="exp-pts-holder">
                      <label htmlFor="pts" className='add-act-label'>points:</label>
                      <input type="number" id='pts' />
                    </div>
                  </div>
                  <label htmlFor="description" className='add-act-label'>actitivty description:</label>
                  <input type="text" id='description' />
                  <div className='btn-holder'>
                    <button id="submit" className='submit-btn'>Add</button>
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
