import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaTasks, FaTrophy, FaChartBar, FaRegFlag } from 'react-icons/fa'
import { MdLogout, MdVerified } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg';
import { RiFlag2Fill } from 'react-icons/ri'

const SidebarData = [

  {
    title: "Announcements",
    path: "/Admin/Adannouncements",
    icon: <RiFlag2Fill size={20} />,
  },
  {
    title: "Activity",
    path: "/Admin/Adquest",
    icon: <FaTasks size={20} />,
  },
  {
    title: "Accounts",
    path: "/Admin/Adaccounts",
    icon: <CgProfile size={20} />,
  },
  {
    title: "Requests",
    path: "/Admin/Requests",
    icon: <MdVerified size={20} />,
  },
  {
    title: "Leaderboards",
    path: "/Admin/Adleaderboards",
    icon: <FaChartBar size={20} />,
  },
]
const AdSidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="profilesidebar-container">
          <CgProfile size={120} className='admin-icon' />
          <p className='admin-label'>Admin</p>
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
          <Link to="/Admin/Login" className='logout-link'>
            <MdLogout size={30} className='logout-btn' />
          </Link>
        </div>
      </div>

    </>
  )
}

export default AdSidebar