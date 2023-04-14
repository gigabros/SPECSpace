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
  }
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
                {Accounts.map((item, index) => {
                  return (
                    <div className="acc-card" key={index}>
                      <div className="acc-img-holder">
                        <img src={item.img} className="acc-img" />
                      </div>
                      <div className="acc-info-holder">
                        <p className='acc-username'>{item.username}</p>
                        <p className='acc-lvl'>Level {item.level} </p>
                        <p className='acc-points'>{item.points} points</p>
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
