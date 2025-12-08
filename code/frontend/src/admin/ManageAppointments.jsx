// import { useEffect, useState } from "react";
// import axios from "axios";
// import AdminLayout from "./AdminLayout";
// // import { useNavigate } from "react-router-dom";

// const ManageAppointments = () => {
//   const [apps, setApps] = useState([]);

//   const fetchAppointments = () => {
//     const token = localStorage.getItem("token");

//     axios.get("http://localhost:3000/api/admin/appointments", {
//       // headers: { Authorization: token }
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     // .then(res => setApps(res.data))   // ⭐ NOW UI WORKS
//     //       .catch(err => console.log(err));
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const updateStatus = async (id, status) => {
//     const token = localStorage.getItem("token");

//     await axios.put(
//       `http://localhost:3000/api/admin/appointment/${id}`,
//       { status },
//       { headers: { Authorization: token } }
//     );

//     alert("Status Updated");
//     fetchAppointments();
//   };

//   return (
//     <AdminLayout>
//       <h3>Manage Appointments</h3>

//       <table className="table table-striped mt-3">
//         <thead className="table-dark">
//           <tr>
//             <th>Doctor</th>
//             <th>Patient</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {apps.map((app) => (
//             <tr key={app._id}>
//               <td>{app.doctorId?.name}</td>
//               <td>{app.patientId?.name}</td>
//               <td>{app.date}</td>
//               <td>{app.time}</td>
//               <td>
//                 <span
//                   className={`badge 
//                   ${
//                     app.status === "Approved"
//                       ? "bg-success"
//                       : app.status === "Cancelled"
//                       ? "bg-danger"
//                       : "bg-warning"
//                   }
//                 `}
//                 >
//                   {app.status}
//                 </span>
//               </td>

//               <td>
//                 <button
//                   className="btn btn-success btn-sm mx-1"
//                   onClick={() => updateStatus(app._id, "Approved")}
//                 >
//                   Approve
//                 </button>

//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => updateStatus(app._id, "Cancelled")}
//                 >
//                   Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </AdminLayout>
//   );
// };

// export default ManageAppointments;
import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const ManageAppointments = () => {
  const [apps, setApps] = useState([]);

  const fetchAppointments = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/admin/appointments", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        console.log("ADMIN API DATA:", res.data);
        setApps(res.data);  // ⭐ MUST UPDATE STATE
      })
      .catch(err => console.log("API ERROR:", err.response?.data));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:3000/api/admin/appointment/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }  // ⭐ FIXED AUTH
    );

    alert("Status Updated");
    fetchAppointments();   // ⭐ REFRESH TABLE
  };

  return (
    <AdminLayout>
      <h3>Manage Appointments</h3>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Patient_Problem</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(apps) && apps.map(app => (
            <tr key={app._id}>
              <td>{app.doctorId?.name}</td>
              {/* <td>{app.patientId?.name}</td> */}
              <td>{app.name}</td>
              <td>{app.problem}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>
                <span className={`badge ${
                  app.status === "Approved"
                    ? "bg-success"
                    : app.status === "Cancelled"
                    ? "bg-danger"
                    : "bg-warning"
                }`}>
                  {app.status}
                </span>
              </td>

              <td>
                <button
                  className="btn btn-success btn-sm mx-1"
                  onClick={() => updateStatus(app._id, "Approved")}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => updateStatus(app._id, "Cancelled")}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageAppointments;

