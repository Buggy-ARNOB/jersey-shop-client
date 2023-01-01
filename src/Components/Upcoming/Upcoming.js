import React, { useEffect, useState } from 'react';
import './Upcoming.css'
const Upcoming = () => {
    const [mostSales, setMostSales] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/mostsale')
            .then(res => res.json())
            .then(data => {
                setMostSales(data)
            })
    }, [])


    return (
        <div className='container blackbg rounded-5 mb-5'>
            <h3 className='App mt-5 pt-4 fw-bold'><u>Top Seller</u></h3>

            <div className='row row-cols-3 App parentGrid mx-auto'>
                {
                    mostSales?.map(mostSale => <div className='m-3 upcomingCard col border border-1 rounded-3'>
                        <img className='w-100 imageCard mt-2 rounded-3' src={mostSale.img} alt="" />
                        <h5 className='fw-semibold mt-3'>{mostSale.kit}</h5>
                        <p className='fw-semibold pt-3'>
                            Price: {mostSale.price}$
                        </p>
                    </div>)

                }
            </div>


        </div>
    );
};

export default Upcoming;