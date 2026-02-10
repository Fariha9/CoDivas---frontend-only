import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Quizzes from './Quizzes';
import Courses from './Courses';
import Login from './Login';
import Signup from './Signup';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path ='/about' element={<About></About>}></Route>
        <Route path ='/quizzes' element={<Quizzes></Quizzes>}></Route>
 <Route path ='/courses' element={<Courses></Courses>}></Route>
 <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
      
    </div>
  );
};

export default Main;