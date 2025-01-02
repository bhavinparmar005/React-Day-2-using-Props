import './Navbar.css'

function Navbar() {
    return (
       
            <>
                <nav className="navbar">
                    <div className="nav-brand">
                        <div className="logo">
                            <span className="logo-text">My Store</span>
                            <div className="logo-shine" />
                        </div>
                    </div>
                    <div className="nav-links">
                        <a href="home" className="nav-link active">
                            <span>Home</span>
                            <div className="link-effect" />
                        </a>
                        <a href="Products" className="nav-link">
                            <span>Products</span>
                            <div className="link-effect" />
                        </a>
                        <a href="Services" className="nav-link">
                            <span>Services</span>
                            <div className="link-effect" />
                        </a>
                        <a href="About" className="nav-link">
                            <span>About</span>
                            <div className="link-effect" />
                        </a>
                        <a href="Contact" className="nav-link">
                            <span>Contact</span>
                            <div className="link-effect" />
                        </a>
                    </div>
                    <div className="nav-actions">
                        <button className="action-btn">
                            <div className="btn-text">Sign In</div>
                            <div className="btn-effect" />
                        </button>
                    </div>
                    <button className="mobile-toggle">
                        <span />
                        <span />
                        <span />
                    </button>
                </nav>
                {/* Mobile Menu */}
                <div className="mobile-menu">
                    <div className="menu-header">
                        <div className="logo">
                            <span className="logo-text">My Stor</span>
                        </div>
                        <button className="close-menu">
                            <span className="close-icon" />
                        </button>
                    </div>
                    <div className="menu-links">
                        <a href="#" className="menu-link active">
                            <span>Home</span>
                        </a>
                        <a href="#" className="menu-link">
                            <span>Products</span>
                        </a>
                        <a href="#" className="menu-link">
                            <span>Services</span>
                        </a>
                        <a href="#" className="menu-link">
                            <span>About</span>
                        </a>
                        <a href="#" className="menu-link">
                            <span>Contact</span>
                        </a>
                    </div>
                    <div className="menu-footer">
                        <button className="mobile-action-btn">
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </>




       
    )
}

export default Navbar