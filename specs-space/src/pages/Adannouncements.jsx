import React, { useState,useEffect,useReducer } from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import img from '../data/img1.jpg'
import { BsChevronExpand } from 'react-icons/bs'
import { MdDeleteForever, MdUpload } from "react-icons/md";
import { FaFileUpload } from 'react-icons/fa'
import axios from '../api/axios';

export default function AdAnnouncements() {
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
  };

  const [data,setData] = useState({
    title:"",
    description:""
  });
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const post =async(e)=>{
    e.preventDefault();
    const posting = await axios.post('/add_post',{
      title: data.title,
      message: data.description
    }).then(res=>{
      console.log(res)
      alert("Posted Successfuly")

      posted_activty()
    }).catch(error=>{
      console.log(error)
    })
    
  }
  
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }
  const [posts,setPosts]= useState([]);
  

  const posted_activty=()=>{
    axios.get('/get_posts')
    .then(res => {
      setPosts(res.data.payload.data);
      console.log(res.data.payload.data)
      console.log(data)
      forceUpdate()
    })
  }
  useEffect(()=>{
    posted_activty()
  },[])

  const delete_post = async (id) => {
    const delete_now = await axios.post('/delete_post', {
        post_id : id
    }).then(res => {
        console.log(res)
        posted_activty()
    }).catch(error => {
        console.log(error)
    })
    // console.log(id)
}
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <AdSidebar />
        </div>

        <div className="right-side">
          <div className='announcement-page'>
            <h1 className='announcement-title'>Announcements</h1>
            <div className="announce-container">
              <div className="announce-list">
                {posts.map((task) => {
                  return (
                    <div className="announce-card" key={task.post_id}>
                      <input type="checkbox" id={task.post_id} className='chbx' />
                      <div className='announce-header'>
                        <img src={task.img} className="announce-img" />
                        <div className="announce-title-holder">
                          <label htmlFor={task.post_id} className='btn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                          <p className="announce-title">{task.title}</p>
                          <MdDeleteForever onClick={()=>delete_post(task.post_id)} size={30} className='del-btn' />
                        </div>
                      </div>
                      <div className='announce-desc-container'>
                        <p className="announce-desc">{task.message}</p>
                        <br></br>
                        <p className="announce-desc">{task.date}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="add-announce-holder">
                <h1 className='add-ann-title'>Add Announcement</h1>
                <form className='add-ann-form'>
                  <label htmlFor="title" className='add-aan-label'>announcement title:</label>
                  <div className="title-file-container">
                    <input onChange={(e)=>handle(e)} value={data.title} type="text" id='title' />

                    <button onClick={handleClick} className='file-btn-holder'><MdUpload size={30} className='file-btn' /></button>
                    <input type="file"
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                  </div>

                  <label htmlFor="description" className='add-ann-label'>announcement description:</label>
                  <input onChange={(e)=>handle(e)} value={data.description} type="text" id='description' />
                  {/* <input type="file" id="img" className='announe-img' /> */}
                  <div className='btn-holder'>
                    <button onClick={post} id="submit" className='submit-btn'>Add</button>
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