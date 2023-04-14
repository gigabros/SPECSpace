import React from 'react'
import Sidebar from '../components/Sidebar'
import img from '../data/img1.jpg'
import { BsChevronExpand } from 'react-icons/bs'
import axios from '../api/axios'
import { useState,useReducer,useEffect } from 'react'
const announcedata = [

  {
    id: "1",
    img: img,
    title: "Announcement Title",
    desc: "Duis anim est velit est sit culpa occaecat ut amet deserunt proident in tempor mollit. Aliqua voluptate ea fugiat aliquip labore minim id aliqua adipisicing. Reprehenderit incididunt proident elit anim nulla pariatur et deserunt nulla aute dolor nisi. Fugiat culpa magna quis dolor in incididunt mollit eiusmod. Id excepteur id elit cillum anim consectetur laborum ipsum in occaecat do amet. Veniam culpa aute ut irure ullamco consectetur aute sint non ex."
  },
  {
    id: "2",
    img: img,
    title: "Announcement Title",
    desc: "Qui sint veniam laboris anim officia amet ea non. Aliqua exercitation labore quis ut quis excepteur proident in esse sunt. Elit laboris mollit Lorem minim dolor in ex labore. Sit pariatur labore irure laborum fugiat ad irure ipsum laborum ullamco do aliqua. Duis dolor sunt sit adipisicing enim velit elit eiusmod qui nulla."
  },
  {
    id: "3",
    img: img,
    title: "Announcement Title",
    desc: "Est incididunt do aliquip aliqua pariatur culpa. Fugiat cupidatat cillum sint mollit laborum ea nulla consectetur. Enim deserunt do eu do eu laborum pariatur. Culpa in quis tempor incididunt ad Lorem aute proident mollit exercitation aute exercitation."
  },
  {
    id: "4",
    img: img,
    title: "Announcement Title",
    desc: "Reprehenderit magna aliquip ullamco velit adipisicing qui fugiat esse et laborum duis. Pariatur proident sit magna irure eu sit culpa. Elit duis adipisicing qui esse laborum magna. Dolore nostrud excepteur voluptate irure ad enim labore veniam aute dolore incididunt laboris. Aliqua esse nisi eu cillum dolor culpa consequat cillum."
  },
  {
    id: "5",
    img: img,
    title: "Announcement Title",
    desc: "Duis anim est velit est sit culpa occaecat ut amet deserunt proident in tempor mollit. Aliqua voluptate ea fugiat aliquip labore minim id aliqua adipisicing. Reprehenderit incididunt proident elit anim nulla pariatur et deserunt nulla aute dolor nisi. Fugiat culpa magna quis dolor in incididunt mollit eiusmod. Id excepteur id elit cillum anim consectetur laborum ipsum in occaecat do amet. Veniam culpa aute ut irure ullamco consectetur aute sint non ex."
  },
  {
    id: "6",
    img: img,
    title: "Announcement Title",
    desc: "Qui sint veniam laboris anim officia amet ea non. Aliqua exercitation labore quis ut quis excepteur proident in esse sunt. Elit laboris mollit Lorem minim dolor in ex labore. Sit pariatur labore irure laborum fugiat ad irure ipsum laborum ullamco do aliqua. Duis dolor sunt sit adipisicing enim velit elit eiusmod qui nulla."
  },
]
export default function Announcements() {
  const [poster,setPoster]=useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  // useEffect(()=>{
  //   posted_activity()
    
  
  // },[])
  // useEffect(()=>{
  //   forceUpdate()
  // },[])
  
  const posted_activity=axios.get('/get_posts')
    .then(res=>{
      setPoster(res.data.payload.data);
      forceUpdate()
    })
  // useEffect(()=>{
  //   console.log(poster)
  // },[])
    

  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="right-side">
          <div className='announcement-page'>
            <h1 className='announcement-title'>Announcements</h1>
            <div className="announce-container">
              {
                poster !=null
                ?
                poster.map((task,index) => {
                return (
                  <div className="announce-card" key={task.index}>
                    <input type="checkbox" id={task.post_id} className='hide' />
                    <div className='announce-header'>
                      <img src={task.post_id} className="announce-img" />
                      <div className="announce-title-holder">
                        <p className="announce-title">{task.title}</p>
                        <label htmlFor={task.post_id} className='btn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                      </div>
                    </div>
                    <div className='announce-desc-container'>
                      <p className="announce-desc">{task.message}</p>
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
