import './Home.css'
function Home() {
    return (
        <div id="carouselExampleInterval" className="carousel slide blackbg" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">

                    <div className="d-flex w-75 mx-auto py-5">
                        <div className="w-50 mt-auto mb-auto">
                            <h3>Nike Air Jordar-1</h3>
                            <p>
                                Experience the comfort....
                            </p>
                            <p>
                                Starting at 399$
                            </p>

                        </div>
                        <div>
                            <img src="https://cf.projerseyshop.cc/upload/ttmall/img/20211130/8e7c27e70e7c869bbd2342e636580f36.png=z-0,0_f-webp" className="d-block slideImg" alt="..." />
                        </div>
                    </div>



                </div>
                <div className="carousel-item" data-bs-interval="3000">

                    <div className="d-flex w-75 ms-auto me-auto  py-5">
                        <div className="w-50 mt-auto mb-auto">
                            <h3>Sony WH-1000XM4 Wireless (ANC)</h3>
                            <p>
                                Experience the industry leading Active Noise Cancelation With Dynamic Dolby Sound
                                System....
                            </p>
                            <p>
                                Starting at 799$
                            </p>

                        </div>
                        <div>
                            <img src="https://cf.projerseyshop.cc/upload/ttmall/img/20211130/8e7c27e70e7c869bbd2342e636580f36.png=z-0,0_f-webp" className="d-block slideImg" alt="..." />
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex w-75 ms-auto me-auto  py-5">
                        <div className="w-50 mt-auto mb-auto">
                            <h3>Burberry Solid T-Shirt</h3>
                            <p>
                                Lightweight as LIGHT
                            </p>
                            <p>
                                Starting at 199$
                            </p>

                        </div>
                        <div>
                            <img src="https://cf.projerseyshop.cc/upload/ttmall/img/20211130/8e7c27e70e7c869bbd2342e636580f36.png=z-0,0_f-webp" className="d-block slideImg" alt="..." />
                        </div>
                    </div>



                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;