import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ Courses }) => {
    
    const handlePurchase = () => {
        const currentUserEmail = localStorage.getItem("user_email");
        if (currentUserEmail) {
            localStorage.setItem(`purchased_${Courses.name}_${currentUserEmail}`, "true");
            alert(`${Courses.name} purchased! Check your dashboard.`);
            window.location.href = "/dashboard"; 
        } else {
            alert("Please Login first!");
        }
    };

    return (
        <div className="card w-full bg-purple-100 shadow-sm">
          <figure className="h-60 overflow-hidden">
            <img src={Courses.pic} alt="Courses" className="w-full h-full object-cover"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-xl">{Courses.name}</h2>
            
            <Link 
              to={Courses.page} 
              className="btn bg-purple-700 text-white hover:bg-purple-500 font-bold w-full sm:w-auto"
            >
              View Details
            </Link>

      
          </div>
        </div>
    );
};

export default Course;