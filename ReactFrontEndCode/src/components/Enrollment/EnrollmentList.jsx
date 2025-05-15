import { useEffect, useState } from 'react';
import { getEnrollments, deleteEnrollment } from '../../services/enrollmentService';
import { Link } from 'react-router-dom';

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    const res = await getEnrollments();
    setEnrollments(res.data);
    console.log("output",res.data);
  };

  const handleDelete = async (id) => {
    await deleteEnrollment(id);
    loadEnrollments();
  };

  return (
    <div className="container">
      <h2>Enrollments</h2>
      <Link to="/add-enrollment" className="btn btn-warning mb-3">+ Add Enrollment</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(e => (
            <tr key={e.id}>
              <td>{e.student?.name}</td>
              <td>{e.course?.name}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => window.location.href = `/edit-enrollment/${e.id}`}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(e.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentList;
