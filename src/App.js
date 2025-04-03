import {StudentList} from './StudentList'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {StudentInfo} from './StudentInfo.js'
import {NavigatioBar} from './NavBar.js'
import { AddStudentForm } from './AddStudentForm.js';
import { Updatemarks } from './UpdateMarks.js';
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <NavigatioBar />
        <div className="App-content"> {/* Wrap Routes with a div */}
          <Routes>
            <Route path="/" element={<h1>Welcome to SCTS School administrator System</h1>} />
            <Route path="/StudentInfo" element={<StudentInfo />} />
            <Route path="/studentList" element={<StudentList />} />
            <Route path="/addStudent" element={<AddStudentForm />} />
            <Route path="/updateMarks" element={<Updatemarks />} />
            <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: '50px' }}>404: No Page Found</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
