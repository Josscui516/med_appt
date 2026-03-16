import React from "react";
import "./ReportsLayout.css";

function ReportsLayout() {

  const reports = [
    {
      id: 1,
      doctor: "Dr. John Doe",
      speciality: "Cardiology"
    },
    {
      id: 2,
      doctor: "Dr. Jane Smith",
      speciality: "Dermatology"
    }
  ];

  return (
    <div className="reports-page">

      <h1>Reports</h1>

      <table className="reports-table">

        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report, index) => (
            <tr key={report.id}>

              <td>{index + 1}</td>
              <td>{report.doctor}</td>
              <td>{report.speciality}</td>

              {/* View Report */}
              <td>
                <a
                  href="/patient_report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-btn">
                    View Report
                  </button>
                </a>
              </td>

              {/* Download Report */}
              <td>
                <a
                  href="/patient_report.pdf"
                  download="patient_report.pdf"
                >
                  <button className="download-btn">
                    Download Report
                  </button>
                </a>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ReportsLayout;