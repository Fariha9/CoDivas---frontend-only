import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router';

const JS = ({addToCart}) => {

  const course = {
  name: "Javascript",
  price: 30,
  lessonLink: "/Courses/JSLesson",
};

    return (
      <div className="min-h-screen">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Javascript</h3>
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
    <Link to="/Courses/JSLesson" className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto"
    >View Lessons</Link>
    </div>

  </div>
</dialog>
        </span>
    </div>
    <section className="space-y-6 mt-2">
    <h2 className='text-3xl font-bold mt-10'>🔹 What is this course about?</h2>
    <p className='text-lg mt-5'>JavaScript is the programming language of the web. This course teaches you how to make websites dynamic, 
      interactive, and user-friendly. You will learn how to add logic to web pages and create real-world applications using JavaScript.</p>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you learn from this course?</h2>
    <p className='text-lg mt-5'>By the end of this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Understand JavaScript syntax and core concepts</li>
        <li className='list-disc text-lg'>Work with variables, data types, operators, and functions</li>
        <li className='list-disc text-lg'>Manipulate the Document Object Model (DOM) to update web pages dynamically</li>
        <li className='list-disc text-lg'>Handle events like clicks, form submissions, and keyboard input</li>
        <li className='list-disc text-lg'>Use arrays, objects, and loops to manage data</li>
        <li className='list-disc text-lg'>Implement basic frontend interactivity and simple web apps</li>
        <li className='list-disc text-lg'>Debug and test your JavaScript code</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Why should you learn JavaScript?</h2>
    <p className='text-lg mt-5'>JavaScript is essential for modern web development. Learning it allows you to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Make websites interactive and responsive</li>
        <li className='list-disc text-lg'>Work as a frontend or full-stack developer</li>
        <li className='list-disc text-lg'>Build web applications, games, and tools</li>
        <li className='list-disc text-lg'>Understand frameworks like React, Angular, or Vue</li>
        <li className='list-disc text-lg'>Open doors to a variety of tech career paths</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What do you need before starting?</h2>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Basic understanding of computers</li>
        <li className='list-disc text-lg'>HTML and CSS basics (recommended but not mandatory)</li>
        <li className='list-disc text-lg'>Curiosity and willingness to practice coding</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you be able to do after completing this course?</h2>
    <p className='text-lg mt-5'>After completing this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Write JavaScript code confidently</li>
        <li className='list-disc text-lg'>Make websites interactive and dynamic</li>
        <li className='list-disc text-lg'>Handle data and user interactions effectively</li>
        <li className='list-disc text-lg'>Prepare for frontend frameworks and advanced web development</li>
        <li className='list-disc text-lg'>Build small web applications and projects</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Course Price: $30</h2>
    <h2 className='text-3xl font-bold mt-8 mb-10'>🔹 Instructor: Shradha Khapra</h2>
    </section>
  </div>
</div>
    </div> 
    </div>
    );
};

export default JS;