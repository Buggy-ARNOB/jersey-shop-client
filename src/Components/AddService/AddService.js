import React, { useState } from 'react';

const AddService = () => {

    const [serviceData, setServiceData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(serviceData)
        event.target.reset();

        fetch("http://localhost:5000/jersey", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Your Data inserted")
                }
            })


    }
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...serviceData };
        newUser[field] = value;
        setServiceData(newUser);
    }



    return (
        <div className='App container'>
            <h3 className='fw-bold mt-4'> Add New Jersey</h3>
            <form onSubmit={handleSubmit} className='my-3'>
                <input onChange={handleChange} type="text" name='title' placeholder='Jersey Name' required />

                <br />
                <br />
                <input onChange={handleChange} type="text" name='imageLink' placeholder='URL Of Image' required />

                <br />
                <br />
                <input onChange={handleChange} type="number" name='price' placeholder='Price' required />
                <br />
                <br />


                <button className='btn' type='submit'>Add Jersey</button>

            </form>
        </div>
    );
};

export default AddService;