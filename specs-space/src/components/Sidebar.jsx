import React from 'react'
import SideProfile from './SideProfile'
import { NavLink, Link } from 'react-router-dom';
import { FaTasks, FaTrophy, FaChartBar, FaRegFlag } from 'react-icons/fa'
import { BsMegaphoneFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import './compstyle.scss'

const SidebarData = [

  {
    title: "Announcements",
    path: "/announcements",
    icon: <BsMegaphoneFill size={20} />,
  },
  {
    title: "Activity",
    path: "/activity",
    icon: <FaTasks size={20} />,
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
        <Link to="/" className='logout-link'>
          <MdLogout size={30} className='logout-btn'/>
        </Link>
        </div>
      </div>

    </>
  )
}

export default Sidebar