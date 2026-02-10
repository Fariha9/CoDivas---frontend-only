import React from 'react';
import YouTube from 'react-youtube';

const ProgLesson = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Introduction To Programming (C/C++)</h1>
            {[
              { title: "Lesson 1: Introduction", id: "WDX1gLtCIlc" },
              { title: "Lesson 2: First C Program", id: "wEWHq8FzdMw" },
              { title: "Lesson 3: Variables & Data Types", id: "HWyEt9Q_2pE" },
              { title: "Lesson 4: Arithmetic Operator", id: "6y2TkyxlMcw" },
              { title: "Lesson 5: Relational Operator", id: "KCkcz6-xl74" },
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

export default ProgLesson;
