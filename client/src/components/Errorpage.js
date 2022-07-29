import React from 'react'
import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <>
        <div id =  "notfound">
            <div clasdName = "notfound">
                <div className = "notfound-404">
                    <h1> 404 </h1>
                </div>
                <h2>WE ARE SORRY PAGE NOT FOUND !!!!</h2>
                <p className = "mb-5">
                    THE PAGE YOU ARE LOOKING FOR HAS BEEN REMOVE !!!!
                    SORRY FOR THE INCONVENIENCE !!!!!
                </p>
                <NavLink to = "/"> BACK TO HOMEPAGE </NavLink>
            </div>
        </div>
        </>
    )
}

export default Errorpage 