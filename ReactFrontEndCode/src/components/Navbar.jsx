// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={{ backgroundColor: '#eee', padding: '10px' }}>
//       <Link to="/" style={{ marginRight: '15px',textDecoration:'none' }}>Students</Link>
//       <Link to="/courses" style={{ marginRight: '15px',textDecoration:'none' }}>Courses</Link>
//       <Link to="/enrollments" style={{ marginRight: '15px',textDecoration:'none' }}>Enrollments</Link>
//       <Link to="/add-student" style={{ marginRight: '15px',textDecoration:'none' }}>Add Student</Link>
//       <Link to="/add-course" style={{ marginRight: '15px',textDecoration:'none' }}>Add Course</Link>
//       <Link to="/add-enrollment" style={{textDecoration:'none'}}>Add Enrollment</Link>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Student App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Students</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/enrollments">Enrollments</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;


