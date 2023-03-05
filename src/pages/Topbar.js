import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
            </nav>
        </div>
    )
}

export default Topbar
