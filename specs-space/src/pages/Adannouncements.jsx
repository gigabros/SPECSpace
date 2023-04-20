import React from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import img from '../data/img1.jpg'
import { BsChevronExpand } from 'react-icons/bs'
import { MdDeleteForever, MdUpload } from "react-icons/md";
import { FaFileUpload } from 'react-icons/fa'

const announcedata = [

  {
    id: "1",
    img: img,
    title: "adle",
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
export default function AdAnnouncements() {
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
  };

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
                {announcedata.map((value, index) => {
                  return (
                    <div className="announce-card" key={index}>
                      <input type="checkbox" id={value.id} className='chbx' />
                      <div className='adannounce-header'>
                        {/* <img src={value.img} className="announce-img" /> */}
                        <div className="adannounce-title-holder">
                          <label htmlFor={value.id} className='adbtn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                          <p className="adannounce-title">{value.title}</p>
                          <MdDeleteForever size={30} className='addel-btn' />
                        </div>
                      </div>
                      <div className='announce-desc-container'>
                        <p className="announce-desc">{value.desc}</p>
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
                    <input type="text" id='title' />

                    <button onClick={handleClick} className='file-btn-holder'><MdUpload size={30} className='file-btn' /></button>
                    <input type="file"
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                  </div>

                  <label htmlFor="description" className='add-ann-label'>announcement description:</label>
                  <input type="text" id='description' />
                  {/* <input type="file" id="img" className='announe-img' /> */}
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