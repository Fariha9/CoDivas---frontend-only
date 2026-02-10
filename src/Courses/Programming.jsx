import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Programming = ({addToCart}) => {

  const course = {
  name: "Introduction To Programming (C/C++)",
  price: 30,
  lessonLink: "/Courses/ProgLesson",
};
    return (
        <div className="min-h-screen">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Introduction To Programming (C/C++)</h3>
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
    <Link to="/Courses/ProgLesson" className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto"
    >View Lessons</Link>
    </div>

  </div>
</dialog>
        </span>
    </div>
    <section className="space-y-6 mt-2">
    <h2 className='text-3xl font-bold mt-10'>🔹 What is this course about?</h2>
    <p className='text-lg mt-5'>Introduction to Programming is a beginner-level course designed to teach you how computers think and how to communicate with them using code.
         You will learn the fundamental concepts of programming through simple explanations and hands-on examples. No prior programming knowledge is 
         required.</p>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you learn from this course?</h2>
    <p className='text-lg mt-5'>By the end of this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Understand how programs work</li>
        <li className='list-disc text-lg'>Write basic programs using a programming language</li>
        <li className='list-disc text-lg'>Use variables, data types, and operators</li>
        <li className='list-disc text-lg'>Apply decision-making using conditions (if-else)</li>
        <li className='list-disc text-lg'>Use loops to repeat tasks efficiently</li>
        <li className='list-disc text-lg'>Create and use functions</li>
        <li className='list-disc text-lg'>Solve simple real-world problems using logic</li>
        <li className='list-disc text-lg'>Develop problem-solving and logical thinking skills</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Why should you learn programming?</h2>
    <p className='text-lg mt-5'>Programming is a core skill in Computer Science and technology. Learning programming helps you:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Think logically and solve problems efficiently</li>
        <li className='list-disc text-lg'>Build software, websites, and applications</li>
        <li className='list-disc text-lg'>Understand how technology works behind the scenes</li>
        <li className='list-disc text-lg'>Prepare for advanced CSE subjects like Data Structures, AI, and Software Engineering</li>
        <li className='list-disc text-lg'>Increase career opportunities in tech-related fields</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What do you need before starting?</h2>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Basic computer knowledge</li>
        <li className='list-disc text-lg'>Curiosity and willingness to learn</li>
        <li className='list-disc text-lg'>No prior programming experience required</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you be able to do after completing this course?</h2>
    <p className='text-lg mt-5'>After completing this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Write simple programs confidently</li>
        <li className='list-disc text-lg'>Understand and read basic code</li>
        <li className='list-disc text-lg'>Continue learning advanced programming topics</li>
        <li className='list-disc text-lg'>Build a strong foundation for your CSE career</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Course Price: $30</h2>
    <h2 className='text-3xl font-bold mt-8 mb-10'>🔹 Instructor: Anisul Islam</h2>
    </section>
  </div>
</div>
    </div> 
    </div>
    );
};

export default Programming;