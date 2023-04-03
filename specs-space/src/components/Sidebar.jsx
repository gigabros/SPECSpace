import React from 'react'
import SideProfile from './SideProfile'
import { NavLink } from 'react-router-dom';
import { FaClipboardList, FaTrophy, FaChartBar, FaRegFlag } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import './compstyle.scss'

const SidebarData = [

  {
    title: "Quest",
    path: "/guild",
    icon: <FaClipboardList size={20} />,
  },
  {
    title: "Achievements",
    path: "/achievements",
    icon: <FaTrophy size={20} />,
  },
  {
    title: "Leaderboards",
    path: "/leaderboards",
    icon: <FaChartBar size={20} />,
  },
  {
    title: "Announcements",
    path: "/announcements",
    icon: <FaRegFlag size={20} />,
  },
]

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="profilesidebar-container">
          <SideProfile />
        </div>

        <section>
          <div className="sidebar-content">
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className='make-btn' >
                  <NavLink to={item.path} className='link'>
                    <div >
                      <div className='icon'>{item.icon}</div>
                    </div>
                    <div className="label">
                      <span id={item.title}>{item.title}</span>
                    </div>
                  </NavLink>
                </div>
              )

            })
            }

          </div>
        </section>
        <div className="logout-container">
          <MdLogout size={30} className='logout-btn' />
        </div>
      </div>

    </>
  )
}

export default Sidebar