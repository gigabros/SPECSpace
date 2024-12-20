import React, { useState, useEffect, useReducer } from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import img from '../data/img1.jpg'
import { BsChevronExpand } from 'react-icons/bs'
import { MdDeleteForever, MdUpload } from "react-icons/md";
import { FaFileUpload } from 'react-icons/fa'
import axios from '../api/axios';
import logo from '../components/specs_logo.png'

const sub = [
  {
    id: 1,
    title: "Yurrrrrrr", 
    message: 'sssssssssss ssss ssssss ssss ssssss ssssssss sssssss ssssss ss sssssssss',
    date: "01.02.2020"
  },
  {
    id: 1,
    title: "Yurrrrssss sss sssssssssssss sssss sssss ssssssssrrr",
    message: 'sad',
    date: "01.02.2020"
  },
]
export default function AdAnnouncements() {
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
  };

  const [data, setData] = useState({
    title: "",
    description: ""
  });
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const post = async (e) => {
    e.preventDefault();
    const posting = await axios.post('/add_post', {
      title: data.title,
      message: data.description
    }).then(res => {

      alert("Posted Successfuly")

      posted_activty()
    }).catch(error => {
      console.log(error)
    })

  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }
  const [posts, setPosts] = useState([]);


  const posted_activty = () => {
    axios.get('/get_posts')
      .then(res => {
        setPosts(res.data.data);
        console.log(res);
        forceUpdate()
      })
  }
  useEffect(() => {
    posted_activty()
  }, [])

  const delete_post = async (id) => {
    const delete_now = await axios.post('/delete_post', {
      post_id: id
    }).then(res => {
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
          <div className='adannouncement-page'>
            <h1 className='adannouncement-title'>Announcements</h1>
            <div className="adannounce-container">
              <div className="adannounce-list">
                { posts != null
                    ?
                    posts.map((task, index) => {
                  return (

                    <div className="adannounce-card" key={task.post_id}>
                      <input type="checkbox" id={index} className='chbx' />
                      <div className='adannounce-header'>
                        <div className="adannounce-title-holder">
                          <label htmlFor={index} className='btn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                          <p className="adannounce-title">{task.title}</p>
                          <MdDeleteForever onClick={() => delete_post(task.post_id)} size={30} className='addel-btn' />
                        </div>
                        <p className="adannounce-date">Date Posted: {task.date}</p>
                      </div>
                      <div className='adannounce-desc-container'>
                        <p className="adannounce-desc">{task.message}</p>
                        <br></br>
                      </div>
                    </div>
                  )
                })
                :
                <div className="announce-empty">
                  <div className="empty-logo-holder">
                    <img src={logo} alt="specs logo" className='empty-logo' />
                  </div>
                  <h1 className='empty-des'>No Announcement!</h1>
                </div>
                }
              </div>

              <div className="add-announce-holder">
                <h1 className='add-ann-title'>Add Announcement</h1>
                <form className='add-ann-form'>
                  <label htmlFor="title" className='add-ann-label'>announcement title:</label>
                  <input onChange={(e) => handle(e)} value={data.title} type="text" id='title' />

                  <label htmlFor="description" className='add-ann-label'>announcement description:</label>
                  {/* <input onChange={(e) => handle(e)} value={data.description} type="text" id='description' /> */}
                  <textarea onChange={(e) => handle(e)} value={data.description} name="description" id="description" cols="30" rows="10"></textarea>
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