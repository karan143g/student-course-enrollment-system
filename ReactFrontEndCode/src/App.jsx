import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/Student/StudentList';
import AddStudent from './components/Student/AddStudent';
import EditStudent from './components/Student/EditStudent';
import CourseList from './components/Course/CourseList';
import AddCourse from './components/Course/AddCourse';
import EditCourse from './components/Course/EditCourse';
import EnrollmentList from './components/Enrollment/EnrollmentList';
import AddEnrollment from './components/Enrollment/AddEnrollment';
import EditEnrollment from './components/Enrollment/EditEnrollment';
import Navbar from './components/Navbar';

function App() {
  return (
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<StudentList />} />
  //     <Route path="/add-student" element={<AddStudent />} />
  //     <Route path="/edit-student/:id" element={<EditStudent />} />

  //     <Route path="/courses" element={<CourseList />} />
  //     <Route path="/add-course" element={<AddCourse />} />
  //     <Route path="/edit-course/:id" element={<EditCourse />} />

  //     <Route path="/enrollments" element={<EnrollmentList />} />
  //     <Route path="/add-enrollment" element={<AddEnrollment />} />
  //     <Route path="/edit-enrollment/:id" element={<EditEnrollment />} />

  //   </Routes>
  // </Router>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
        <Route path="/enrollments" element={<EnrollmentList />} />
        <Route path="/add-enrollment" element={<AddEnrollment />} />
        <Route path="/edit-enrollment/:id" element={<EditEnrollment />} />
      </Routes>
    </Router>
  
  );
}

export default App;
