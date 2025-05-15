import { useState } from 'react';
import { addStudent } from '../../services/studentService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', email: '', dob: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    // setStudent({ name: '', email: '', dob: '' });
      navigate('/');
  };

  return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: '400px' }}>
        <h4 className="card-title mb-4 text-center">Add Student</h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" className="form-control" value={student.dob}
          onChange={(e) => setStudent({ ...student, dob: e.target.value })} required />
      </div>
         <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
      <button type="submit" className="btn btn-primary px-4">Add</button>
       <Link to="/" className="btn btn-secondary px-4">Cancel</Link>
          </div>   
    </form>
  </div>
  </div>
);

};

export default AddStudent;
