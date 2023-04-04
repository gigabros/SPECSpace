import React from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

import dp from '../data/dp.jpg'

const Accounts = [
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  }, {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
  {
    img: dp,
    username: "John Wick",
    title: "Challenger",
    level: 9000,
    points: 100,
  },
]

const Requests = [
  {
    img: dp,
    username: "John Wick",
    email: "20209999@gordoncollege.edu.ph",
    title: "---",
    level: "---",
    points: "---",
  },
  {
    img: dp,
    username: "John Wick",
    email: "20209999@gordoncollege.edu.ph",
    title: "---",
    level: "---",
    points: "---",
  },
  {
    img: dp,
    username: "John Wick",
    email: "20209999@gordoncollege.edu.ph",
    title: "---",
    level: "---",
    points: "---",
  },
  {
    img: dp,
    username: "John Wick",
    email: "20209999@gordoncollege.edu.ph",
    title: "---",
    level: "---",
    points: "---",
  },
]

export default function Adaccounts() {
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
                <h1 className='acc-list-title'>Accounts List</h1>
                {Accounts.map((item, index) => {
                  return (
                    <div className="acc-card" key={index}>
                      <div className="acc-btn-holder">
                        <GiTrashCan size={30} className='del-btn' />
                      </div>

                      <div className="acc-info-holder">
                        <p className='acc-username'>{item.username}</p>
                        <p className='acc-title'>{item.title}</p>
                        <p className='acc-lvl'>Level {item.level} </p>
                        <p className='acc-points'>{item.points} points</p>
                      </div>

                      <div className="acc-img-holder">
                        <img src={item.img} className="acc-img" />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="acc-requests-list">
                <h1 className='acc-list-title'>Account Requests</h1>
                {Requests.map((item, index) => {
                  return (
                    <div className="acc-card" key={index}>
                      <div className="acc-btn-holder">
                        <GiTrashCan size={30} className='del-btn' />
                        <MdOutlineCheckCircleOutline size={30} className='fin-btn' />
                      </div>

                      <div className="acc-info-holder">
                        <p className='acc-username'>{item.username}</p>
                        <p className='acc-email'>{item.email}</p>
                        {/* <p className='acc-title'>{item.title}</p>
                        <p className='acc-lvl'>Level {item.level} </p>
                        <p className='acc-points'>{item.points} points</p> */}
                      </div>

                      <div className="acc-img-holder">
                        <img src={item.img} className="acc-img" />
                      </div>
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
