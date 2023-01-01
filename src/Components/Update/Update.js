import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const selectedService = useLoaderData();

    const { _id } = selectedService;

    const [jersey, setJersey] = useState(selectedService)

    const handleUpdateService = (event) => {
        event.preventDefault();
        console.log(jersey);

        fetch(`http://localhost:5000/jersey/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jersey)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Data Updated")
                }
            })
    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newJersey = { ...jersey };
        newJersey[field] = value;
        setJersey(newJersey);
    }


    return (
        <div className='App container'>
            <h3 className='fw-bold mt-4'> Update Your Jersey Info</h3>
            <form onSubmit={handleUpdateService} className='my-3'>
                <input onChange={handleInputChange} type="text" name='title' placeholder='Jersey Name' />

                <br />
                <br />
                <input onChange={handleInputChange} type="text" name='imageLink' placeholder='Jersey URL' />

                <br />
                <br />
                <input onChange={handleInputChange} type="number" name='price' placeholder='Price' />
                <br />
                <br />


                <button className='btn btn-success' type='submit'>Update Jersey Info</button>

            </form>
        </div>
    );
};

export default Update;