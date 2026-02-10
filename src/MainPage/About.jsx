import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
    return (
    <div className="bg-white">

      {/* Hero */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
            About CoDivas
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            An interactive learning platform built to simplify computer science
            for students — from beginners to future engineers.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              CoDivas is designed for students who struggle with traditional
              learning methods. We focus on clarity, structure, and interaction
              so learning computer science feels achievable and enjoyable.
            </p>
            <p className="text-gray-600">
              From programming fundamentals to advanced topics like DSA and
              AI, CoDivas supports learners at every step.
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-left">
            <img
              src="https://i.ibb.co.com/20Lp1YbJ/undraw-educator-re-ju47.png"
              alt="Who we are"
              className="max-w-sm"
            />
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-purple-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To make computer science education accessible, interactive,
              and beginner-friendly through structured content and practical
              learning.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students with strong problem-solving skills and
              confidence to succeed in technology-driven careers.
            </p>
          </div>

        </div>
      </section>

      {/* Why Codivas */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-purple-700 mb-10" data-aos="fade-up">
            Why Choose CoDivas?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Student-focused learning approach",
              "Interactive quizzes & real practice",
              "Clean and distraction-free UI",
              "Structured learning paths",
              "Beginner to advanced coverage",
              "Built by learners, for learners"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-lg p-6 text-gray-700 font-medium"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;