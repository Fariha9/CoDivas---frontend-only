import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import YouTube from 'react-youtube';
const MLLesson = () => {
    return (
        <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Machine Learning</h1>
            {[
              { title: "Lesson 1: Introduction", id: "gmvvaobm7eQ" },
              { title: "Lesson 2: Linear Regression", id: "8jazNUpO3lQ" },
              { title: "Lesson 3: Gradient Descent and Cost Function", id: "vsWrXfO3wWw" },
              { title: "Lesson 4: Save Model Using Joblib And Pickle", id: "KfnhNlD8WZI" },
              { title: "Lesson 5: Logistic Regression", id: "zM4VZR0px8E" },
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

export default MLLesson;