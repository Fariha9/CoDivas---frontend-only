import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import YouTube from 'react-youtube';
const JSLesson = () => {
    return (
        <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">JavaScript</h1>
            {[
              { title: "Lesson 1: Variables & Data Types", id: "ajdRvxDWH4w" },
              { title: "Lesson 2: Operators and Conditional Statements", id: "Zg4-uSjxosE" },
              { title: "Lesson 3: Loops and Strings", id: "UmRtFFSDSFo" },
              { title: "Lesson 4: Arrays", id: "gFWhbjzowrM" },
              { title: "Lesson 5: Functions & Methods", id: "P0XMXqDGttU" },
            ].map((lesson, index) => (
              <details key={index} className="mb-4">
                <summary className="card w-full bg-purple-200 hover:bg-purple-300 cursor-pointer list-none">
                  <div className="card-body">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {lesson.title}
                    </h3>
                  </div>
                </summary>
                <div className="card mt-4">
                  <div className="card-body">
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <YouTube videoId={lesson.id} className="w-full h-full" iframeClassName="w-full h-full"/>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSLesson;