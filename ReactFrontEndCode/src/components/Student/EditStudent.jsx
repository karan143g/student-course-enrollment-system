// import { useEffect, useState } from 'react';
// import { getStudent, updateStudent } from '../../services/studentService';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditStudent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [student, setStudent] = useState({ name: '', email: '', dob: '' });

//   useEffect(() => {
//     const loadStudent = async () => {
//       const res = await getStudent(id);
//       const s = res.data;
//       setStudent({
//         name: s.name,
//         email: s.email,
//         dob: s.dob.substring(0, 10), // format for input type="date"
//       });
//     };
//     loadStudent();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateStudent(id, student);
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Edit Student</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={student.name}
//         onChange={(e) => setStudent({ ...student, name: e.target.value })}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={student.email}
//         onChange={(e) => setStudent({ ...student, email: e.target.value })}
//         required
//       />
//       <input
//         type="date"
//         value={student.dob}
//         onChange={(e) => setStudent({ ...student, dob: e.target.value })}
//         required
//       />
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default EditStudent;

import { useEffect, useState } from 'react';
import { getStudent, updateStudent } from '../../services/studentService';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({id: 0, name: '', email: '', dob: '' });

  useEffect(() => {
    const loadStudent = async () => {
      const res = await getStudent(id);
      const s = res.data;
      setStudent({
        id:s.id,
        name: s.name,
        email: s.email,
        dob: s.dob.substring(0, 10),
      });
    };
    loadStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate('/');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="mb-4 text-center">Edit Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={student.email}
              onChange={(e) => setStudent({ ...student, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={student.dob}
              onChange={(e) => setStudent({ ...student, dob: e.target.value })}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Update</button>
            <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;

