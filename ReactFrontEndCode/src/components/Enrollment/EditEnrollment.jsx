// import { useEffect, useState } from 'react';
// import { getEnrollment, updateEnrollment } from '../../services/enrollmentService';
// import { getStudents } from '../../services/studentService';
// import { getCourses } from '../../services/courseService';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditEnrollment = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [enrollment, setEnrollment] = useState({ studentId: '', courseId: '' });
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const enrollRes = await getEnrollment(id);
//       setEnrollment(enrollRes.data);

//       const studentRes = await getStudents();
//       const courseRes = await getCourses();
//       setStudents(studentRes.data);
//       setCourses(courseRes.data);
//     }

//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateEnrollment(id, enrollment);
//     navigate('/enrollments');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Edit Enrollment</h2>
//       <select
//         value={enrollment.studentId}
//         onChange={(e) => setEnrollment({ ...enrollment, studentId: parseInt(e.target.value) })}
//         required
//       >
//         <option value="">Select Student</option>
//         {students.map((s) => (
//           <option key={s.id} value={s.id}>
//             {s.name}
//           </option>
//         ))}
//       </select>

//       <select
//         value={enrollment.courseId}
//         onChange={(e) => setEnrollment({ ...enrollment, courseId: parseInt(e.target.value) })}
//         required
//       >
//         <option value="">Select Course</option>
//         {courses.map((c) => (
//           <option key={c.id} value={c.id}>
//             {c.title}
//           </option>
//         ))}
//       </select>

//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default EditEnrollment;


import { useEffect, useState } from 'react';
import { getEnrollment, updateEnrollment } from '../../services/enrollmentService';
import { getStudents } from '../../services/studentService';
import { getCourses } from '../../services/courseService';
import { useParams, useNavigate } from 'react-router-dom';

const EditEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState({ studentId: '', courseId: '' });
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const enrollRes = await getEnrollment(id);
      setEnrollment(enrollRes.data);

      const studentRes = await getStudents();
      const courseRes = await getCourses();
      setStudents(studentRes.data);
      setCourses(courseRes.data);
    }

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEnrollment(id, enrollment);
    navigate('/enrollments');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="mb-4 text-center">Edit Enrollment</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student</label>
            <select
              className="form-select"
              value={enrollment.studentId}
              onChange={(e) => setEnrollment({ ...enrollment, studentId: e.target.value })}
              required
            >
              <option value="">-- Select Student --</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Course</label>
            <select
              className="form-select"
              value={enrollment.courseId}
              onChange={(e) => setEnrollment({ ...enrollment, courseId: e.target.value })}
              required
            >
              <option value="">-- Select Course --</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Update</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/enrollments')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEnrollment;
