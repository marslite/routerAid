import "./nav.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";

function Navbar(){

    return(
        <div className="nav-cl">


        <nav className="navbar navbar-dark bg-dark nav-ex">
            <a className="navbar-brand btn " href="#">Multiblock</a>
            <a className="navbar-brand btn " href="#/focus">Focus mode</a>
        <span className="spacer-1">
            <form class="form-inline my-2 my-lg-0 spacer-2">
            <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button class="btn btn-warning btn-ed" type="submit"> <b>Search</b></button>
            </form>
        </span>
        </nav> 


        </div>
    


    );
}

export default Navbar;