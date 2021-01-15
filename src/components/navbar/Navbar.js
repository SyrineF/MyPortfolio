import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
              <div className="col-lg-4">
                <a className="navbar-brand" href="#">
                  <img src="images/logonav.png" width="auto" height="100" alt=""/>
                </a>
              </div>
              <div className="col-lg-8 collapse navbar-collapse justify-content-end">
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">About </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">Portfolio </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">Blog </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">Contact </a>
                  </li>
                 </ul>
              </div>
              
            </nav>
        </div>
    )
}

export default Navbar
