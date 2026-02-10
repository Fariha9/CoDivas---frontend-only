import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      title: "How to Start Your Coding Journey", // আপনার চাহিদা অনুযায়ী এটি অপরিবর্তিত
      desc: "Learning to code can be intimidating. Consistency is key. Start with HTML/CSS, then move to JavaScript. Build projects to solidify your knowledge.",
      date: "15 Jan 2026",
      image: "https://i.ibb.co.com/XxL0v11g/channels4-profile.jpg"
    },
    {
      title: "The Logic Behind Problem Solving",
      desc: "Programming is more than syntax; it's about thinking. Explore how breaking down complex problems into smaller tasks can make any algorithm easy to grasp.",
      date: "14 Jan 2026",
      image: "https://i.ibb.co.com/YF5D3txN/1-KVkdr-CUoq-Zr5-LR-fm-WRF-Q.jpg"
    },
    {
      title: "Breaking Into the World of Open Source",
      desc: "Want to gain real-world experience? Open source is the way. Learn how contributing to GitHub projects can skyrocket your career and web dev skills.",
      date: "12 Jan 2026",
      image: "https://i.ibb.co.com/JjcHT1XN/world-sticker-padding.webp"
    },
    {
      title: "Debugging: The Developer's Superpower",
      desc: "Spending hours on a single comma? Don't worry. Master the art of using Chrome DevTools and console logs to find and fix bugs faster than ever.",
      date: "10 Jan 2026",
      image: "https://i.ibb.co.com/4wkC39LS/Advanced-debugging-postman-blog.webp"
    },
    {
      title: "From Code to Creation: The Designer's Eye",
      desc: "Why do some apps feel better than others? It's the UX. Understand how spacing, contrast, and user flow can turn a basic project into a professional product.",
      date: "08 Jan 2026",
      image: "https://i.ibb.co.com/jqSDr13/Screenshot-2026-01-15-131657.png"
    },
    {
      title: "Is AI Your Competitor or Your Teammate?",
      desc: "The rise of generative AI is changing how we write code. Learn to use AI tools as a pair programmer to double your productivity without losing your logic.",
      date: "05 Jan 2026",
      image: "https://i.ibb.co.com/2rSV3zF/683aecf8978fcd7ee4dc05a5-about.webp"
    }
  ]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("codivas_blogs")) || [];
    if (saved.length > 0) {
      setBlogs((prev) => [...saved, ...prev]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-purple-700 mb-2 uppercase tracking-tighter text-left">CoDivas Chronicles</h2>
        <p className="text-gray-500 mb-12 text-left font-medium">Practical insights and tech stories for your growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all p-2 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-[32px] overflow-hidden mb-6 relative">
                  <img src={blog.image || "https://via.placeholder.com/500"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-purple-700 uppercase tracking-widest">Article</div>
                </div>
                <div className="px-6 pb-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-purple-600 transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{blog.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button 
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-purple-50 text-purple-700 font-bold px-6 py-2.5 rounded-2xl text-[10px] uppercase hover:bg-purple-600 hover:text-white transition-all tracking-widest"
                >
                  Read Story →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SMALLER MODAL (Pop-up Box) --- */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedBlog(null)} // বাইরের অংশে ক্লিক করলে বন্ধ হবে
        >
          <div 
            className="bg-white w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // বক্সের ভেতর ক্লিক করলে যেন বন্ধ না হয়
          >
            <div className="h-52 overflow-hidden relative">
                <img src={selectedBlog.image} className="w-full h-full object-cover" alt="" />
                <button 
                    onClick={() => setSelectedBlog(null)}
                    className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white w-8 h-8 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center text-sm"
                >✕</button>
            </div>
            <div className="p-8 text-left">
              <span className="text-[9px] font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-tighter">{selectedBlog.date}</span>
              <h2 className="text-2xl font-black text-gray-800 mt-4 mb-4 leading-tight">{selectedBlog.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedBlog.desc}
              </p>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="mt-8 w-full bg-purple-600 text-white font-bold py-3.5 rounded-2xl hover:bg-purple-700 transition-all text-xs uppercase tracking-widest shadow-lg shadow-purple-100"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;