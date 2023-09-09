
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-4">
  <div className="container">
    <a className="navbar-brand fs-1 fw-bold text-danger" href="#">JAC Enterprises</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end fs-4" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <button type="button" className="btn btn-danger btn-lg">Home</button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-danger btn-lg mx-4">About</button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-danger btn-lg">Contact</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header;