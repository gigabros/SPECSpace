import React, { useState, useEffect } from 'react'
import AdSidebar from '../components/AdSidebar'
import dp from '../data/dp.jpg'
import { GoVerified } from 'react-icons/go'
import { FiAlertCircle } from 'react-icons/fi'
import axios from '../api/axios'
import ConfirmationModal from '../components/ConfirmationModal'
import logo from '../components/specs_logo.png'

const ver = [
    {
        id: 202011015,
        first_name: "Juswaaaaaaaaaaaaaaaaaaaaaa",
        email: '202011015@gordoncollege.edu.ph'
    },
    {
        id: 202011015,
        name: "Juswaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        email: '202011015@gordoncollege.edu.ph'
    },
    {
        id: 202011015,
        name: "Juswa",
        email: '202011015@gordoncollege.edu.ph'
    },
]

export default function Requests() {
    const [data, setData] = useState([])

    const get_data = () => {
        axios.get('/get_list_unverified')
            .then(res => {
                setData(res.data.data)
                console.log(data)
            })
    }
    useEffect(() => {
        get_data()

    }, [])

    const verify_account = async (id, fname, lname, block, year) => {
        const verifying = await axios.post('/verify', {
            id: id,
            fname: fname,
            lname: lname,
            block: block,
            year: year
        }).then(res => {
            console.log(res)
            get_data()
        }).catch(error => {
            console.log(error)
        })
    }
    const reject_verify = async (id) => {
        const verifying = await axios.post('/reject_verify', {
            id: id,
        }).then(res => {
            console.log(res)
            get_data()
        }).catch(error => {
            console.log(error)
        })
    }
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
                            {
                                data != null
                                    ?
                                    data.map((item) => {
                                        return (
                                            <>
                                                <div className="req-card-holder">
                                                    <div className="req-info" key={item.id}>

                                                        <p className='req-title'>{item.first_name} {item.last_name}</p>
                                                        <p className='req-des'>{item.id}</p>
                                                        <p className='req-des'>{item.email}</p>
                                                    </div>

                                                    <div className="req-btn">
                                                        {/* <button onClick={() => verify_account(item.id, item.name)} className='verify-btn'>Verify User</button> */}
                                                        <ConfirmationModal
                                                            confirmIcon={<GoVerified size={100} className='verify-icon' />}
                                                            message="Are you sure you want to VERIFY this User?"
                                                            onConfirm={() => verify_account(item.id, item.first_name, item.last_name, item.block, item.year)}
                                                            buttonLabel="Verify User"
                                                            buttonClassName='verify-btn' />
                                                        <ConfirmationModal
                                                            confirmIcon={<FiAlertCircle size={100} className='reject-icon' />}
                                                            message="Are you sure you want to REJECT this User?"
                                                            onConfirm={() => reject_verify(item.id)}
                                                            buttonLabel="Reject"
                                                            buttonClassName='reject-btn' />
                                                        {/* <MdOutlineNotInterested size={30} className='reject-btn' /> */}
                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                    :
                                    <div className="req-empty">
                                        <div className="empty-req-holder">
                                            <img src={logo} alt="specs logo" className='empty-req' />
                                        </div>
                                        <h1 className='empty-req-des'>No Accounts!</h1>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
