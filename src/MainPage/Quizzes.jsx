import React, { useEffect, useState } from "react";
import { useLocation } from "react-router"; 
import QuizCard from "../components/QuizCard";

const Quizzes = () => {
  const location = useLocation();
  const [quizList, setQuizList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  

  const currentUserEmail = localStorage.getItem("user_email");
  const [streak, setStreak] = useState(
    Number(localStorage.getItem(`streak_${currentUserEmail}`)) || 0
  );
  
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    fetch("/quiz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizList(data);
        const params = new URLSearchParams(location.search);
        const quizId = params.get("id");
        if (quizId) {
          setSelectedQuiz(Number(quizId));
          setSelectedLesson(null);
          resetQuiz();
        }
      })
      .catch(err => console.error("Error fetching quiz data:", err));
  }, [location.search]);

  useEffect(() => {
    if (currentUserEmail) {
      const savedStreak = localStorage.getItem(`streak_${currentUserEmail}`) || 0;
      setStreak(Number(savedStreak));
    }
  }, [currentUserEmail]);

  const resetQuiz = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  const handleBackToMain = () => {
    setSelectedQuiz(null);
    setSelectedLesson(null);
    resetQuiz();
  };

  const isLessonUnlocked = (quizId, lessonIndex) => {
    if (lessonIndex === 0) return true; 

    const prevKey = `quiz_${quizId}_lesson_${lessonIndex - 1}_${currentUserEmail}`;
    return localStorage.getItem(prevKey) === "completed";
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let currentScore = 0;
    selectedLesson.questions.forEach((q, index) => {
      if (answers[index] === q.answer) currentScore++;
    });
    setScore(currentScore);
    setSubmitted(true);

    const completionKey = `quiz_${selectedLesson.quizId}_lesson_${selectedLesson.index}_${currentUserEmail}`;
    localStorage.setItem(completionKey, "completed");

    const today = new Date().toDateString();

    const lastDateKey = `lastQuizDate_${currentUserEmail}`;
    const lastDate = localStorage.getItem(lastDateKey);
    
    if (lastDate !== today) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem(`streak_${currentUserEmail}`, newStreak);
      localStorage.setItem(lastDateKey, today);
    }
  };


  return (
    <div className="relative min-h-screen bg-base-200 py-2"> 
      <div className="max-w-6xl mx-auto p-5 w-full">
        {!selectedQuiz && !selectedLesson && (
          <>
            <header className="text-center mt-2 mb-6 flex flex-col items-center relative">
              <button 
                className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2 mb-4 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                onClick={() => setShowCalendar(true)}
              >
                <span className="text-xl">🔥</span>
                <span className="text-lg font-bold text-gray-700">Streak: {streak}</span>
              </button>

              {showCalendar && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="bg-white p-8 rounded-[32px] shadow-2xl w-full max-w-sm relative animate-fadeIn">
                    <button onClick={() => setShowCalendar(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black font-bold"> ✕ </button>
                    <h3 className="font-black text-2xl text-center mb-6 text-gray-800">📅 Activity</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <div key={day} className="text-center text-xs font-bold text-gray-400 mb-2">{day}</div>
                      ))}
                      {Array.from({ length: 28 }, (_, i) => {
                        const dayNum = i + 1;
                        const isCompleted = dayNum <= streak; 
                        return (
                          <div key={i} className={`h-9 w-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${isCompleted ? 'bg-green-500 text-white shadow-md' : 'bg-gray-50 text-gray-300'}`}>
                            {isCompleted ? '✓' : dayNum}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 mb-1">
                 <span className="text-5xl">📘</span>
                 <h1 className="text-5xl font-black text-gray-800">Quiz Practice</h1>
              </div>
              <p className="text-gray-500 text-lg font-medium">Learn something new every day!</p>
            </header>

            <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
              {quizList.slice(0, visibleCount).map(q => (
                <QuizCard key={q.id} quiz={{ ...q, onStart: (id) => setSelectedQuiz(id) }} />
              ))}
            </div>

            {quizList.length > visibleCount && (
              <div className="text-center mt-12">
                <button onClick={() => setVisibleCount(quizList.length)} className="btn btn-lg bg-purple-700 text-white hover:bg-black px-16 rounded-full border-none shadow-xl">
                  Load More Quizzes
                </button>
              </div>
            )}
          </>
        )}

        
        {selectedQuiz && !selectedLesson && (() => {
          const quiz = quizList.find(q => q.id === selectedQuiz);
          return (
            <div className="bg-white p-10 rounded-[40px] shadow-xl max-w-2xl mx-auto text-left mt-4">
              <h2 className="text-3xl font-black mb-8 text-purple-900 border-b pb-5">{quiz?.title}</h2>
              <div className="space-y-4">
                {quiz?.lessons.map((lesson, i) => {
                  const unlocked = isLessonUnlocked(quiz.id, i);
                  return (
                    <button key={i} disabled={!unlocked} onClick={() => { setSelectedLesson({ ...lesson, quizId: quiz.id, index: i }); resetQuiz(); }}
                      className={`btn w-full h-auto py-5 flex justify-between items-center px-8 border-2 text-xl font-bold rounded-2xl transition-all ${unlocked ? "bg-white border-purple-500 text-purple-700 hover:bg-purple-50" : "bg-gray-100 border-gray-200 text-gray-400"}`}
                    >
                      <span>{lesson.title}</span>
                      <span>{!unlocked && "🔒"}</span>
                    </button>
                  );
                })}
              </div>
              <button className="btn btn-ghost mt-10 font-bold" onClick={handleBackToMain}>← Back to Courses</button>
            </div>
          );
        })()}

        {selectedLesson && (
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-[40px] shadow-2xl mt-4 text-left">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <h2 className="text-2xl font-bold text-purple-800">{selectedLesson.title}</h2>
              <div className="badge badge-lg bg-orange-50 text-orange-600 border-none font-bold py-5 px-6 rounded-full">
                Streak: {streak} 🔥
              </div>
            </div>

            <form onSubmit={handleQuizSubmit} className="space-y-8">
              {selectedLesson.questions.map((q, qIndex) => (
                <div key={qIndex} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="font-bold text-2xl mb-8 text-gray-800">{qIndex + 1}. {q.q}</p>
                  <div className="grid gap-4">
                    {q.options.map((opt, oIndex) => (
                      <label key={oIndex} className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        submitted && opt === q.answer ? "bg-green-100 border-green-500 text-green-800" :
                        submitted && answers[qIndex] === opt && opt !== q.answer ? "bg-red-100 border-red-500 text-red-800" :
                        answers[qIndex] === opt ? "border-purple-600 bg-purple-50" : "bg-white border-transparent"
                      }`}>
                        <input type="radio" className="radio radio-primary" name={`q-${qIndex}`} required disabled={submitted} checked={answers[qIndex] === opt} onChange={() => setAnswers(prev => ({ ...prev, [qIndex]: opt }))} />
                        <span className="font-bold text-xl">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="flex gap-4 pt-6">
                {!submitted ? (
                  <button type="submit" className="btn btn-lg bg-purple-700 text-white flex-1 border-none rounded-2xl text-xl font-bold">Submit Quiz</button>
                ) : (
                  <button type="button" className="btn btn-lg bg-purple-700 text-white flex-1 border-none rounded-2xl text-xl font-bold" onClick={() => setSelectedLesson(null)}>Complete Lesson</button>
                )}
                <button type="button" className="btn btn-lg btn-outline border-purple-700 text-purple-700 font-bold px-10 rounded-2xl" onClick={handleBackToMain}>Exit</button>
              </div>
            </form>

            {submitted && (
              <div className="mt-10 mb-6 mx-auto max-w-2xl overflow-hidden rounded-[30px] bg-gradient-to-r from-purple-600 to-indigo-700 p-[1px] shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white/5 backdrop-blur-sm py-6 px-8 rounded-[29px] text-white">
                  <div className="flex items-center gap-5">
                    <div className="bg-yellow-400 p-3 rounded-2xl rotate-6 hidden sm:block shadow-lg">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-3xl font-black tracking-tight leading-none uppercase">Congratulations!</h3>
                      <p className="text-purple-200 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Lesson Completed Successfully</p>
                    </div>
                  </div>
                  <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-2xl min-w-[110px] text-center">
                    <span className="text-4xl font-black text-yellow-300 leading-none">{score}</span>
                    <span className="text-[11px] font-bold text-white/50 block mt-1 uppercase">/ {selectedLesson.questions.length} Points</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;