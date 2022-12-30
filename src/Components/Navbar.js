import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    let location = useLocation();

    useEffect(() => {
        // console.log(location.pathname);
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                        <Link to='/login'><button type="button" className="btn  btn-outline-primary mx-2">Login</button></Link>
                        <Link to='/signup'><button type="button" className="btn  btn-outline-primary mx-2">Signup</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
