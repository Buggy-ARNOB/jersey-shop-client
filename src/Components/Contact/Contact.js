import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='App w-50 mb-4 mt-4 mx-auto blackbg p-5 rounded-5 border-2'>
            <h2 className='fw-semibold my-4'><u>Contact Us</u></h2>

            <div>
                <div className='w-75 mx-auto'>
                    <div className='d-flex mb-3'>
                        <img className='userPic' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /> <h4 className='ms-4 my-auto'>Haiman Nath -C201067</h4>
                    </div>
                    <div className='d-flex mb-3 my-auto'>
                        <img src="" alt="" /> <h4 className='ms-4'>Nazim Uddin Rifat-C201082</h4>
                    </div>
                    <div className='d-flex mb-3 my-auto'>
                        <img src="" alt="" /> <h4 className='ms-4'>Md Touhedur Rahman-C201126</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;