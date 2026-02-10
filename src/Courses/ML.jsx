import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router';

const ML = ({addToCart}) => {

  const course = {
  name: "Machine Learning",
  price: 30,
  lessonLink: "/Courses/MLLesson",
};

    return (
      <div className="min-h-screen">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Machine Learning</h3>
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
    <Link to="/Courses/MLLesson" className="btn bg-purple-700 text-white hover:bg-purple-500 w-full sm:w-auto"
    >View Lessons</Link>
    </div>

  </div>
</dialog>
        </span>
    </div>
    <section className="space-y-6 mt-2">
    <h2 className='text-3xl font-bold mt-10'>🔹 What is this course about?</h2>
    <p className='text-lg mt-5'>Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to learn patterns from data and 
      make predictions or decisions without being explicitly programmed. This course introduces you to the concepts, techniques, and tools needed to 
      build your own ML models.</p>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you learn from this course?</h2>
    <p className='text-lg mt-5'>By the end of this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Understand the fundamentals of Machine Learning and its applications</li>
        <li className='list-disc text-lg'>Work with supervised and unsupervised learning algorithms</li>
        <li className='list-disc text-lg'>Build models for regression, classification, and clustering tasks</li>
        <li className='list-disc text-lg'>Use Python libraries such as scikit-learn, NumPy, and pandas</li>
        <li className='list-disc text-lg'>Preprocess and analyze real-world datasets</li>
        <li className='list-disc text-lg'>Evaluate and optimize ML models for accuracy and performance</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Why should you learn Machine Learning?</h2>
    <p className='text-lg mt-5'>Machine Learning is revolutionizing industries like healthcare, finance, and technology. Learning ML allows you to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Automate data-driven decision-making</li>
        <li className='list-disc text-lg'>Analyze and predict patterns from large datasets</li>
        <li className='list-disc text-lg'>Work on exciting projects like recommendation systems, image recognition, and predictive analytics</li>
        <li className='list-disc text-lg'>Enhance career opportunities in AI, data science, and analytics</li>
        <li className='list-disc text-lg'>Understand the foundations for advanced AI and deep learning</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What do you need before starting?</h2>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Basic programming skills, preferably in Python</li>
        <li className='list-disc text-lg'>Understanding of high school mathematics (linear algebra, probability, statistics)</li>
        <li className='list-disc text-lg'>Curiosity to experiment with data and models</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 What will you be able to do after completing this course?</h2>
    <p className='text-lg mt-5'>After completing this course, you will be able to:</p>
    <ul className='mx-15'>
        <li className='list-disc text-lg'>Build and deploy simple Machine Learning models</li>
        <li className='list-disc text-lg'>Analyze datasets and extract meaningful insights</li>
        <li className='list-disc text-lg'>Implement regression, classification, and clustering algorithms</li>
        <li className='list-disc text-lg'>Prepare for advanced AI and deep learning courses</li>
        <li className='list-disc text-lg'>Solve real-world problems using ML techniques</li>
    </ul>
    <h2 className='text-3xl font-bold mt-8'>🔹 Course Price: $30</h2>
    </section>
  </div>
</div>
    </div> 
    </div>
    );
};

export default ML;