import React from "react";

function Nav() {
    return (
        <div className="container-fluid">
            <nav className="row navbar">
                <h1 className="col-lg-6 col-sm-12 p-3 text-center">
                    Hello, Ms. Inspecto-Gadget!
                </h1>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12">Availability</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12">Past Inspections</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12">Logout</button>
            </nav>
        </div>

    )
}

export default Nav;