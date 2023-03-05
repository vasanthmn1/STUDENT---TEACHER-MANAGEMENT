import React from 'react'
import { Link } from 'react-router-dom'

const Sliderbar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">App</div>
            </a>


            <hr className="sidebar-divider my-0" />





            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link className="nav-link" to="/studentlist">

                    <span>Student </span></Link>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item active">
                <Link className="nav-link" to="/teacher">

                    <span>Teacher</span></Link>
            </li>




            <hr className="sidebar-divider" />






        </ul>
    )
}

export default Sliderbar
