import { Link } from 'react-router-dom'

function Footer() {
    return (
    <div className="bg-warning mt-5">
        <footer className="py-4">
            <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-3 text-danger fw-bold">Home</Link></li>
                <li className="nav-item"><Link to="contact" className="nav-link px-3 text-danger fw-bold">Contact</Link></li>
                <li className="nav-item"><Link to="about" className="nav-link px-3 text-danger fw-bold">About</Link></li>
            </ul>
        <p className="text-center text-dark fw-bold">&copy; 2023 Jac Enterprises</p>
    </footer>
</div>
    )
}

export default Footer