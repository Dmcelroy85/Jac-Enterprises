import { NavLink } from 'react-router-dom'

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-1">
    <div className="container px-0">
    <img className="navbar-brand" src="../src/assets/images/mystery-logo.png" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end fs-4" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <NavLink to="/"><button type="button" className="btn btn-danger btn-lg border border-3 border-primary">Home</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="about"><button type="button" className="btn btn-danger btn-lg border border-3 border-primary mx-4">About</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="contact"><button type="button" className="btn btn-danger btn-lg border border-3 border-primary">Contact</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header;