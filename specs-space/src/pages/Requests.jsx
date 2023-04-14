import React from 'react'
import AdSidebar from '../components/AdSidebar'
import dp from '../data/dp.jpg'
import { MdOutlineNotInterested } from 'react-icons/md'

const Accounts = [
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
    {
        img: dp,
        username: "John Wick",
        email: "babayaga@gmail.com",
    },
]
export default function Requests() {
    return (
        <>
            <div className="page-container">
                <div className="left-side">
                    <AdSidebar />
                </div>

                <div className="right-side">
                    <div className='Request-page'>
                        <h1 className='Request-title'>Verification Requests</h1>
                        <div className="req-list">
                            {Accounts.map((item, index) => {
                                return (
                                    <>
                                        <div className="req-card-holder">
                                            <div className="req-card" key={index}>
                                                <div className="req-img-holder">
                                                    <img src={item.img} className="req-img" />
                                                </div>
                                                <div className="req-info-holder">
                                                    <p className='req-title'>{item.username} </p>
                                                    <p className='req-des'>{item.email}</p>
                                                </div>
                                            </div>

                                            <div className="req-btn">
                                                <button className='verify-btn'>Verify User</button>
                                                <MdOutlineNotInterested size={30} className='reject-btn'/>
                                                
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
