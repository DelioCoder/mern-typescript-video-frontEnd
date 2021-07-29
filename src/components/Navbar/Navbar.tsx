import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2" to='/' >My videos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/new-video' >Create new video</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
