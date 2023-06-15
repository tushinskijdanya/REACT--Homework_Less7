import { Link, Outlet } from "react-router-dom";


function Layout () {
    return (
        <div className="mainApp-container">
            <div className="mainApp-content">
                <header className="mainApp-header">
                    <nav className="layout-nav">
                        <Link className="home exile" to='/'>HOME</Link>
                        <Link className="exile" to='/about'>About</Link>
                        <Link className="exile" to='/products'>Products</Link>
                        <Link className="exile" to='/contacts'>Contacts</Link>
                    </nav>
                </header>
                <main className="mainApp-main"> <Outlet /> </main>
                <footer className="mainApp-footer">
                    <h2 className="footer-text">FOOTERISTIC FOOTER</h2>
                </footer>
            </div>
        </div>
    )
}

export default Layout;