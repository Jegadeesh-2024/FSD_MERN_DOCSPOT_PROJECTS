import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DocSpot
        </Link>

        <div>
          <Link className="btn btn-light mx-2" to="/book">
            Book Appointment
          </Link>
          <Link className="btn btn-light mx-2" to="/appointments">
            My Appointments
          </Link>
          <Link className="btn btn-light mx-2" to="/add-doctor-1">
           Add Doctor
          </Link>
          <Link className="btn btn-warning mx-2" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
