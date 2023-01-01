import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = () => {

    const [remainingServices, setRemainingServices] = useState();
    //For Showing All Available Service
    useEffect(() => {
        fetch('http://localhost:5000/jersey')
            .then(res => res.json())
            .then(data => {
                setRemainingServices(data)
            })
    }, [remainingServices])

    const handleDelete = (jersey) => {
        const agree = window.confirm(`Are you want to delete ${jersey.name}?`)

        if (agree) {
            fetch(`http://localhost:5000/jersey/${jersey._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert("User Deleted Successfully")

                        const remainingServiceNew = remainingServices.filter(usr => usr._id !== jersey._id);
                        setRemainingServices(remainingServiceNew)
                    }
                })
        }
        else {
            console.log("Canceled");
        }

    }
    return (
        <div className='mt-5 mb-b pt-4 container blackbg rounded-5'>
            <h2 className='fw-bold App'><u>Jersey</u></h2>
            <div className='row row-cols-3 App parentGrid mx-auto'>
                {
                    remainingServices?.map(jersey => <div className='m-3 upcomingCard col border border-1 rounded-3'>
                        <img className='w-100 imageCard mt-2 rounded-3' src={jersey.imageLink} alt="" />
                        <h5 className='fw-semibold mt-2'>{jersey.title}</h5>
                        <p className='fw-semibold pt-1'>
                            Price: {jersey.price}$
                        </p>

                        <div className='d-flex justify-content-around'>
                            <Link to={`/update/${jersey._id}`}>
                                <button className='btn btn-info px-3 rounded-3 fw-semibold text-white'>Edit</button>
                            </Link>
                            <button onClick={() => { handleDelete(jersey) }} className='btn text-white btn-info px-3 rounded-3 fw-semibold'>Delete</button>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Service;