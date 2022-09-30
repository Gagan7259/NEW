import { Link } from 'react-router-dom'
function Navbar() {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">React Routing  Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                
            </ul>
        </div>
    </nav>
}
export default Navbar