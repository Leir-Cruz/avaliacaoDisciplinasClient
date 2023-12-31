import { Route, Routes } from 'react-router-dom';

import { ClassPage } from '../pages/Class';
import { ClassCommentsPage } from '../pages/ClassCommentsPage';
import { ClassesPage } from '../pages/ClassesPage';
import { ComplaintsPage } from '../pages/ComplaintsPage';
import { DepartamentsPage } from '../pages/DepartamentsPage';
import { HomePage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { RegisterClass } from '../pages/RegisterClass';
import { RegisterDepartament } from '../pages/RegisterDepartament';
import { RegisterSubject } from '../pages/RegisterSubject';
import { RegisterTeacher } from '../pages/RegisterTeacher';
import { SubjectsPage } from '../pages/SubjectsPage';
import { TeacherPage } from '../pages/Teacher';
import { TeacherCommentsPage } from '../pages/TeacherCommentsPage';
import { TeachersPage } from '../pages/TeachersPage';
import { UserPage } from '../pages/userPage';
import { UsersPage } from '../pages/UsersPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerDepartament" element={<RegisterDepartament />} />
      <Route path="/registerSubject" element={<RegisterSubject />} />
      <Route path="/registerTeacher" element={<RegisterTeacher />} />
      <Route path="/registerClass" element={<RegisterClass />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/:id" element={<UserPage />} />
      <Route path="/class/:id" element={<ClassPage />} />
      <Route path="/teacher/:id" element={<TeacherPage />} />
      <Route path="/teacher/" element={<TeachersPage />} />
      <Route path="/class/" element={<ClassesPage />} />
      <Route path="/student/" element={<UsersPage />} />
      <Route path="/departament/" element={<DepartamentsPage />} />
      <Route path="/complaints/" element={<ComplaintsPage />} />
      <Route path="/subject/" element={<SubjectsPage />} />
      <Route path="/teacher/:id/comments" element={<TeacherCommentsPage />} />
      <Route path="/class/:id/comments" element={<ClassCommentsPage />} />
    </Routes>
  );
};

export default MainRoutes;
