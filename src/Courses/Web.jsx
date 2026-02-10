import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router';

const Web = ({addToCart}) => {

  const course = {
  name: "Web Development",
  price: 30,
  lessonLink: "/Courses/WebLesson",
};

    return (
      <div className="min-h-screen">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Web Development</h3>
        <span>
        <div className='card-actions justify-center '>
    <button className="btn bg-purple-700 text-white hover:bg-purple-500 font-bold btn-md sm:btn-lg w-full md:w-auto" 
                    onClick={()=>document.getElementById('my_modal_1').showModal()}>Purchase</button>
</div>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-purple-200 w-11/12 max-w-md">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg text-center mt-4">Would you like to purchase this course?</h3>
    <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6'>
        <form method="dialog">
            <button className="btn w-full sm:w-auto">No</button>
        </form>
    <button className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto" onClick={() => {
        addToCart(course); 
        document.getElementById('my_modal_1').close();
        document.getElementById('my_modal_2').showModal();}}>Yes</button>
    </div>
  </div>
</dialog>

<dialog id="my_modal_2" className="modal">
    <div className="modal-box bg-purple-200 text-center w-11/12 max-w-md">
    <HiOutlineCheckBadge size={70} className="mx-auto text-purple-800" />
    <h3 className="font-bold text-lg mt-4">You purchased this course succesfully!</h3>
    <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6'>
        <form method="dialog">
            <button className="btn w-full sm:w-auto">Close</button>
        </form>
    <Link to="/Courses/WebLesson" className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto"
    >View Lessons</Link>
    </div>

  </div>
</dialog>
        </span>
    </div>
    <section className="space-y-6 mt-2">
    <h2 className='text-3xl font-bold mt-10'>🔹 What is this course about?</h2>
    <p className='text-lg mt-5'>Web Development teaches you how to build websites and web applications from scratch. You will learn the 
      fundamentals of both frontend (what users see) and backend (how the server works) development, along with modern tools and frameworks.</p>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you learn from this course?</h2>
    <p className='text-lg mt-5'>By the end of this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Understand the basics of HTML, CSS, and JavaScript</li>
        <li className='list-disc text-lg'>Build responsive and interactive websites</li>
        <li className='list-disc text-lg'>Work with frontend frameworks like React or Vue</li>
        <li className='list-disc text-lg'>Handle backend development with Node.js, Express, or Django</li>
        <li className='list-disc text-lg'>Connect websites to databases and manage data</li>
        <li className='list-disc text-lg'>Deploy websites online for the world to see</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Why should you learn web development?</h2>
    <p className='text-lg mt-5'>Web development is a highly practical skill with limitless opportunities. Learning it allows you to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Build your own websites or apps</li>
        <li className='list-disc text-lg'>Understand how the internet and web applications work</li>
        <li className='list-disc text-lg'>Pursue careers in frontend, backend, or full-stack development</li>
        <li className='list-disc text-lg'>Create portfolio projects to showcase your skills</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What do you need before starting?</h2>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Basic computer literacy</li>
        <li className='list-disc text-lg'>Curiosity and willingness to experiment</li>
        <li className='list-disc text-lg'>No prior programming experience required (though helpful)</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you be able to do after completing this course?</h2>
    <p className='text-lg mt-5'>After completing this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Build interactive, responsive websites</li>
        <li className='list-disc text-lg'>Implement frontend and backend functionalities</li>
        <li className='list-disc text-lg'>Connect web apps to databases</li>
        <li className='list-disc text-lg'>Deploy web applications online</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Course Price: $30</h2>
    <h2 className='text-3xl font-bold mt-8 mb-10'>🔹 Instructor: Hablu Programmer</h2>
    </section>
  </div>
</div>
    </div> 
    </div>
    );
};

export default Web;