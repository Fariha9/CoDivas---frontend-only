import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import YouTube from 'react-youtube';
const DSLesson = () => {
    return (
        <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Data Structures & Algorithms</h1>
            {[
              { title: "Lesson 1: Introduction", id: "-D5u5HJbISc" },
              { title: "Lesson 2: Time & Space Complexity", id: "E2uHcxzKqS8" },
              { title: "Lesson 3: Linear & Binary Search", id: "goqe7OZrJt4" },
              { title: "Lesson 4: Bubble, Insertion, Selection, Merge & Quick", id: "K2BEKh-EqqA" },
              { title: "Lesson 5: Stack", id: "h4HpJMSxcF8" },
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

export default DSLesson;