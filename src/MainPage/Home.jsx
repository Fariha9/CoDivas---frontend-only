import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


AOS.init();


const Home = () => {
    const [features, setFeatures] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [current, setCurrent] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/popular.json")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);


  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      
  }, []);
   useEffect(() => {
    fetch("/reviews.json")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
      window.location.hash = `slide${(current + 1) % reviews.length}`;
    }, 3000); 

    return () => clearInterval(interval);
  }, [current, reviews.length]);
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };
    return (
        <div>

    <div className="min-h-[75vh] flex items-center bg-white px-6 lg:px-20" data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="top-center" data-aos-duration="1000">
      <div className="grid lg:grid-cols-2 gap-10 w-full items-center">

        {/* Left Text Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-purple-700 leading-tight">
            Learn Computer Science  
            <span className="block text-purple-400">The Smart Way</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-md">
            Interactive lessons, clean visuals, and beginner-friendly explanations  
            to help you master coding, algorithms, and real CS concepts.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-0">
              Start Learning
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white">
              Browse Courses
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/20Lp1YbJ/undraw-typing-code-6t2b.png"
            alt="Learning picture"
            className="max-w-sm"
          />
        </div>

      </div>
    </div>


    {/* Features */}

<section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-4" data-aos="fade-up">
          Why Choose CoDivas?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          CoDivas makes computer science learning interactive, easy, and fun for students of all levels.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* popular */}
    <section className="py-20 bg-purple-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Popular Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-purple-700" data-aos="fade-up">
            Popular Courses
          </h2>
          <p className="text-gray-600 mt-3" data-aos="fade-up" data-aos-delay="100">
            Explore our most loved computer science courses
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="card bg-purple-100 border shadow-sm hover:shadow-md transition-all" data-aos="fade-up"
              data-aos-delay={course.id * 200}
            >
              <figure>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">{course.title}</h2>
                <div className="flex mb-2 text-purple-600 text-lg">
  {"★".repeat(course.rating)}
</div>

                <div className="card-actions mt-4">
                  <button className="btn bg-purple-700 text-white hover:bg-purple-600 font-bold">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
  <Link to="/courses" className="btn bg-purple-700 text-white hover:bg-purple-600 font-bold px-8 py-3">
     Browse More Courses </Link>

</div>
        
        </div>
</section>

{/* Quizzes */}
<section className="py-10 px-10 lg:px-20 bg-white" >
  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

    {/* Text */}
    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-purple-700 mb-4">
        Test Your Knowledge with Quizzes
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Reinforce your learning with interactive quizzes on DSA, Python, SQL, and more.
        Challenge yourself and see how much you've learned!
      </p>
      <Link
        to="/quizzes"
        className="btn bg-purple-700 text-white hover:bg-purple-600 font-bold px-6 py-3"
      >
        Explore Quizzes
      </Link>
    </div>

    {/* Image */}
    <div className="lg:w-1/2 flex justify-center" data-aos="fade-up" data-aos-delay="200">
      <img
        src="https://i.ibb.co.com/4gfTRW94/undraw-writing-online-x665.png"
        alt="Quizzes"
        className="max-w-sm"
      />
    </div>

  </div>
</section>


    {/* Reviews */}

<section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-purple-700 mb-5" data-aos="fade-up" >
          What Students Say
        </h2>
         <p className="text-center text-gray-500 mb-12" data-aos="fade-up" data-aos-delay="100">
          Honest feedback from Codivas learners
        </p>

        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className="px-3">
              <div className="bg-purple-50 p-6 rounded-xl shadow-md h-full flex flex-col justify-between" data-aos="fade-up"
              data-aos-delay={review.id * 200}>

                <p className="text-gray-700 mb-4">
                  “{review.review}”
                </p>

                <div>
                  <div className="mb-2 text-purple-600 text-lg">
                    {"★".repeat(review.rating)}
                  </div>

                  <h4 className="font-semibold text-purple-700">
                    {review.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {review.role}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>


    


    </div>
    );
};

export default Home;