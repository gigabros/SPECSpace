import React, { useState, useEffect } from 'react'
import AdSidebar from '../components/AdSidebar'
import dp from '../data/dp.jpg'
import { MdOutlineNotInterested } from 'react-icons/md'
import axios from '../api/axios'

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

    const verify_account = async (id, stud_name) => {
        const verifying = await axios.post('/verify', {
            id: id,
            name: stud_name
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

                                                        <p className='req-title'>{item.name} </p>
                                                        <p className='req-des'>{item.id}</p>
                                                        <p className='req-des'>{item.email}</p>
                                                    </div>

                                                    <div className="req-btn">
                                                        <button onClick={() => verify_account(item.id, item.name)} className='verify-btn'>Verify User</button>
                                                        <MdOutlineNotInterested size={30} className='reject-btn' />

                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                    :
                                    <h1>No Accounts!</h1>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
