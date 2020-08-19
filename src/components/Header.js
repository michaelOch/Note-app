import React from 'react'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-success">
                <div className="container">
                    <span className="navbar-brand">Note App</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
	    </header>
    )
}

export default Header;
