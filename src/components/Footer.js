import React from 'react'
import Customer from './Customer'
import '../css/Footer/scss';


const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="top">
                <div className="inner">
                    <Customer />
                </div>
            </div>
            <div className="bottom">
                <div className="inner">
                    <div>{company.address}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer