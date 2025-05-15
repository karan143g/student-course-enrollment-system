// import { useState } from 'react';
// import { addCourse } from '../../services/courseService';

// const AddCourse = () => {
//   const [course, setCourse] = useState({ name: '', description: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addCourse(course);
//     setCourse({ name: '', description: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Course</h2>
//       <input
//         type="text"
//         placeholder="name"
//         value={course.name}
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={course.description}
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//         required
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddCourse;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCourse } from '../../services/courseService';
import { Link } from 'react-router-dom';

const AddCourse = () => {
  const [course, setCourse] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(course);
    navigate('/courses');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: '400px' }}>
        <h4 className="card-title mb-4 text-center">Add Course</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={course.description}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              required
            />
          </div>
             <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
          <button type="submit" className="btn btn-success px-4">Add</button>
           <Link to="/courses" className="btn btn-danger px-4">Cancel</Link>
          </div>   
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
