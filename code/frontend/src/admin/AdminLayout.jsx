import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h3 className="text-center mb-4">Admin Panel</h3>

        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/admin">Dashboard</Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/admin/doctors">Manage Doctors</Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/admin/appointments">Manage Appointments</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
