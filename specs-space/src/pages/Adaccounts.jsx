import React, { useEffect, useState } from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import dp from '../data/dp.jpg'
import logo from '../components/specs_logo.png'
import axios from '../api/axios';


export default function Adaccounts() {

  const [data, setData] = useState([])

  const get_data = () => {
    axios.get('/get_list_profile')
      .then(res => {
        setData(res.data.data)
      })
  }
  useEffect(() => {
    get_data()
    console.log(data)
  }, [])

  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <AdSidebar />
        </div>

        <div className="right-side">
          <div className='Accounts-page'>
            <h1 className='Accounts-title'>Accounts</h1>
            <div className="Accounts-container">
              <div className="acc-list">
                {
                  data != null
                    ?
                    data.map((item) => {
                      return (
                        <div className="acc-card" key={item.stud_num}>
                          <div className="acc-img-holder">
                            <img src={logo} className="acc-img" />
                          </div>
                          <div className="acc-info-holder">
                            <p className='acc-username'>{item.last_name}, {item.first_name}</p>
                            <p className='acc-lvl'>Level {item.lvl} </p>
                            <p className='acc-points'>{item.points} points</p>
                          </div>

                        </div>
                      )
                    })
                    :
                    <div className="acc-empty">
                      <div className="empty-acc-holder">
                        <img src={logo} alt="specs logo" className='empty-acc' />
                      </div>
                      <h1 className='empty-acc-des'>No Accounts!</h1>
                    </div>
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
