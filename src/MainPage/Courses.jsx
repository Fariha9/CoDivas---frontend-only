import React, { useEffect, useState } from 'react';
import Course from './Course';
import { Navigate, Route, Router } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const Navigate = useNavigate()
    const [Courses,setCourses]=useState([])
    useEffect(()=>{
        fetch("/cardInfo.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
    <>
        <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-25 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {Courses.map(course => (
            <Course key={course.id} Courses={course} />
          ))}
        </div>
      </div>
    </div>
    </>
    );
};

export default Courses;