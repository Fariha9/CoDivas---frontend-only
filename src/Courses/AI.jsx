import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router';

const AI = ({addToCart}) => {

  const course = {
  name: "Artificial Intelligence",
  price: 30,
  lessonLink: "/Courses/AILesson",
};

    return (
      <div className="min-h-screen">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Artificial Intelligence</h3>
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
    <Link to="/Courses/AILesson" className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto"
    >View Lessons</Link>
    </div>

  </div>
</dialog>
        </span>
    </div>
    <section className="space-y-6 mt-2">
    <h2 className='text-3xl font-bold mt-10'>🔹 What is this course about?</h2>
    <p className='text-lg mt-5'>Artificial Intelligence (AI) is the science of making machines think and act like humans. This course introduces 
      you to the fundamentals of AI, including problem-solving, machine learning, and intelligent decision-making. You’ll learn how to build 
      systems that can perceive, reason, and learn from data.</p>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you learn from this course?</h2>
    <p className='text-lg mt-5'>By the end of this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Understand the basics of AI and its applications</li>
        <li className='list-disc text-lg'>Work with problem-solving techniques and search algorithms</li>
        <li className='list-disc text-lg'>Learn fundamentals of Machine Learning (ML) and Deep Learning</li>
        <li className='list-disc text-lg'>Build simple AI models using Python</li>
        <li className='list-disc text-lg'>Apply AI to real-world problems like predictions, recommendations, and automation</li>
        <li className='list-disc text-lg'>Understand ethics and implications of AI in society</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Why should you learn AI?</h2>
    <p className='text-lg mt-5'>AI is transforming every industry. Learning AI allows you to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Solve complex problems intelligently</li>
        <li className='list-disc text-lg'>Work on cutting-edge technologies like ML, NLP, and computer vision</li>
        <li className='list-disc text-lg'>Enhance career opportunities in tech, data science, and research</li>
        <li className='list-disc text-lg'>Develop products that improve efficiency and decision-making</li>
        <li className='list-disc text-lg'>Stay ahead in the rapidly evolving field of computer science</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What do you need before starting?</h2>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Basic programming skills (Python recommended)</li>
        <li className='list-disc text-lg'>Understanding of high school mathematics (algebra, probability)</li>
        <li className='list-disc text-lg'>Curiosity to explore AI concepts and practice coding</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you be able to do after completing this course?</h2>
    <p className='text-lg mt-5'>After completing this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Build simple AI and machine learning models</li>
        <li className='list-disc text-lg'>Understand and apply algorithms for problem-solving</li>
        <li className='list-disc text-lg'>Analyze and process data intelligently</li>
        <li className='list-disc text-lg'>Gain a foundation for advanced AI, ML, and data science courses</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Course Price: $30</h2>
    </section>
  </div>
</div>
    </div> 
    </div>
    );
};

export default AI;