import { Route, Routes } from 'react-router-dom';

import { ClassPage } from '../pages/Class';
import { ClassesPage } from '../pages/ClassesPage';
import { HomePage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { TeacherPage } from '../pages/Teacher';
import { TeachersPage } from '../pages/TeachersPage';
import { UserPage } from '../pages/userPage';
import { UsersPage } from '../pages/UsersPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/:id" element={<UserPage />} />
      <Route path="/class/:id" element={<ClassPage />} />
      <Route path="/teacher/:id" element={<TeacherPage />} />
      <Route path="/teacher/" element={<TeachersPage />} />
      <Route path="/class/" element={<ClassesPage />} />
      <Route path="/student/" element={<UsersPage />} />
    </Routes>
  );
};

export default MainRoutes;
