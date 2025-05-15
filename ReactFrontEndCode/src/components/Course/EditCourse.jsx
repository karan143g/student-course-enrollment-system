// import { useEffect, useState } from 'react';
// import { getCourse, updateCourse } from '../../services/courseService';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditCourse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [course, setCourse] = useState({ name: '', description: '' });

//   useEffect(() => {
//     const load = async () => {
//       const res = await getCourse(id);
//       setCourse(res.data);
//     };
//     load();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateCourse(id, course);
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Edit Course</h2>
//       <input
//         type="text"
//         placeholder="Name"
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
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default EditCourse;


import { useEffect, useState } from 'react';
import { getCourse, updateCourse } from '../../services/courseService';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({ name: '', description: '' });

  useEffect(() => {
    const loadCourse = async () => {
      const res = await getCourse(id);
      setCourse(res.data);
    };
    loadCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCourse(id, course);
    navigate('/courses');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="mb-4 text-center">Edit Course</h3>
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

          <div className="mb-4">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={course.description}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Update</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/courses')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
