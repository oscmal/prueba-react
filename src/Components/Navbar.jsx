import React from "react";

const Navbar= ({ brand}) => {
  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="ms-5">
        <a className="navbar-brand tex-upercase" href="/">{brand}</a>
      </div>
    </nav>
  )
}

export default Navbar;