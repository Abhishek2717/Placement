import React from 'react';
import pic from "../screens/favicon.jpg";

const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={pic} alt="fuckoff"/>

                        </div>
                        <div className="col-md-4">
                            <div className="profile-head">
                                <h5> abhishek pal</h5>
                                <h6>web devloper</h6>
                                <p className="profile-rating mt-3 mb-5">Rankings<span>1/10</p>
                            </div>
                            

                        </div>
                        
                    </div>
                </form>
            </div>
        </>
    )
}