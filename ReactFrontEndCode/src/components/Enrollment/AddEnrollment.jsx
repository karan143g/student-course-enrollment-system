// import { useState, useEffect } from 'react';
// import { addEnrollment } from '../../services/enrollmentService';
// import { getStudents } from '../../services/studentService';
// import { getCourses } from '../../services/courseService';

// const AddEnrollment = () => {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [enrollment, setEnrollment] = useState({ studentId: '', courseId: '' });

//   useEffect(() => {
//     async function fetchData() {
//       const studentRes = await getStudents();
//       const courseRes = await getCourses();
//       setStudents(studentRes.data);
//       setCourses(courseRes.data);
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addEnrollment(enrollment);
//     setEnrollment({ studentId: '', courseId: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Enrollment</h2>
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

//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddEnrollment;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEnrollment } from '../../services/enrollmentService';
import { getStudents } from '../../services/studentService';
import { getCourses } from '../../services/courseService';
import { Link } from 'react-router-dom';

const AddEnrollment = () => {
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState({ studentId: '', courseId: '' });
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentData = await getStudents();
       console.log('Student Data:', studentData);
      const courseData = await getCourses();
       console.log('Course Data:', courseData);
      setStudents(studentData.data);
      setCourses(courseData.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEnrollment(enrollment);
    navigate('/enrollments');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: '400px' }}>
        <h4 className="card-title mb-4 text-center">Add Enrollment</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Student</label>
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

          <div className="mb-3">
            <label className="form-label">Select Course</label>
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
           <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
          <button type="submit" className="btn btn-warning px-4">Add</button>
           <Link to="/enrollments" className="btn btn-info px-4">Cancel</Link>
          </div>     
        </form>
      </div>
    </div>
  );
};

export default AddEnrollment;
