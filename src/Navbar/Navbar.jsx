import { ShoppingCart, ChevronDown, GraduationCap, Code, Globe, Database, Cpu, BrainCircuit, Boxes, Brain } from 'lucide-react';
import React, { useState } from 'react'; 
import { Link } from 'react-router';

const Navbar = ({cart}) => {
    
    const [showAllQuizzes, setShowAllQuizzes] = useState(false);

    
    const quizItems = [
        { id: 1, name: "Intro to Programming", icon: <GraduationCap size={16} className="text-purple-500" /> },
        { id: 2, name: "Data Structures & Algorithms", icon: <Code size={16} className="text-blue-500" /> },
        { id: 3, name: "Web Development", icon: <Globe size={16} className="text-green-500" /> },
        { id: 4, name: "JavaScript Mastery", icon: <Database size={16} className="text-yellow-500" /> },
        { id: 5, name: "Artificial Intelligence", icon: <Cpu size={16} className="text-red-500" /> },
        { id: 6, name: "Machine Learning", icon: <BrainCircuit size={16} className="text-indigo-500" /> },
    ];

   
    const displayedQuizzes = showAllQuizzes ? quizItems : quizItems.slice(0, 3);

    const courseItems = [
        {id: "programming",name: "Introduction To Programming",icon: <Code className="text-purple-600" size={18} />,link: "/Courses/Programming",},
        {id: "dsa",name: "Data Structures & Algorithms",icon: <Boxes className="text-blue-600" size={18} />,link: "/Courses/DS",},
        {id: "web",name: "Web Development",icon: <Globe className="text-green-600" size={18} />,link: "/Courses/Web",},
        {id: "ai",name: "Artificial Intelligence",icon: <Cpu className="text-red-600" size={18} />,link: "/Courses/AI",},
        {id: "ml",name: "Machine Learning",icon: <Brain className="text-indigo-600" size={18} />,link: "/Courses/ML",},
    ];

    return (
        <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50 shadow-lg px-2 lg:px-6">
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow-2xl bg-base-100 rounded-2xl w-72 text-black border border-gray-100 animate-fadeIn">
                        <li><Link to="/dashboard" className="font-semibold py-2">Dashboard</Link></li>
                        <li><Link to="/about" className="font-semibold py-2">About</Link></li>

                        <li className="menu-title mt-2 text-purple-700 font-bold uppercase text-xs tracking-widest">Available Quizzes</li>
                        {quizItems.map((item) => (
                            <li key={item.id}>
                                <Link to={`/quizzes?id=${item.id}`} className="flex items-center gap-3 py-3 hover:bg-purple-50 rounded-xl transition-all">
                                    {item.icon}
                                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                </Link>
                            </li>
                        ))}

                        <li className="menu-title mt-3 text-purple-700 font-bold uppercase text-xs tracking-widest">Available Courses</li>
                        {courseItems.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} className="flex items-center gap-3 py-3 hover:bg-purple-50 rounded-xl transition-all">
                                    <div className="p-2 bg-gray-50 rounded-lg">{item.icon}</div>
                                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                        <div className="divider my-2"></div>
                        <li><Link to="/courses" className="justify-center font-bold text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl py-2">View All Courses</Link></li>
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost normal-case text-2xl font-black tracking-tighter text-white hover:bg-transparent border-none">
                    Co<span className="text-purple-400">Divas</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li><Link to="/dashboard" className=" hover:bg-white hover:text-black rounded-lg font-bold transition-all">Dashboard</Link></li>
                    <li><Link to="/about" className="hover:bg-white hover:text-black rounded-lg font-bold transition-all">About</Link></li>

                    <li className="dropdown dropdown-hover group">
                        <Link to="/quizzes" className="px-4 py-2 hover:bg-white hover:text-black rounded-lg transition-all flex items-center gap-2 font-bold">
                            Quizzes <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                        </Link>
                        
                        <ul tabIndex={0} className="dropdown-content menu p-3 shadow-2xl bg-base-100 rounded-2xl w-80 text-black border border-purple-100 mt-0 transform origin-top transition-all duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                            <div className="grid grid-cols-1 gap-1">
                                <span className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Pick a Topic</span>
                                
                                
                                {displayedQuizzes.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/quizzes?id=${item.id}`} className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-xl group/item transition-colors">
                                            <div className="p-2 bg-gray-50 rounded-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                                {item.icon}
                                            </div>
                                            <span className="text-[15px] font-semibold text-gray-700 group-hover/item:text-purple-700">{item.name}</span>
                                        </Link>
                                    </li>
                                ))}

                                <div className="divider my-1 opacity-50"></div>
                                <li>
                                    {/* বাটনটি ক্লিক করলে বাকি কুইজগুলো শো করবে */}
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowAllQuizzes(!showAllQuizzes);
                                        }}
                                        className="justify-center font-bold text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl py-2 flex w-full transition-all"
                                    >
                                        {showAllQuizzes ? "Show Less" : "View All Quizzes"}
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </li>

                    <li className="dropdown dropdown-hover group">
                        <Link to="/courses" type="button" className="px-4 py-2 hover:bg-white hover:text-black rounded-lg transition-all flex items-center gap-2 font-bold">
                            Courses<ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                        </Link>
                        <ul tabIndex={0} className="dropdown-content menu p-3 shadow-2xl bg-base-100 rounded-2xl w-80 text-black border border-purple-100 mt-0 transform origin-top transition-all duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                            <div className="grid grid-cols-1 gap-1">
                                <span className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Pick a Course</span>
                                {courseItems.map((item) => (<li key={item.id}>
                                    <Link to={item.link} className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-xl group/item transition-colors">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all">{item.icon}</div>
                                    <span className="text-[15px] font-semibold text-gray-700 group-hover/item:text-purple-700">{item.name}</span>
                                    </Link>
                                </li>))}
                                <div className="divider my-1 opacity-50"></div>
                                <li><Link to="/courses" className="justify-center font-bold text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl py-2">
                                    View All Courses</Link>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <button
                    className="btn bg-purple-600 text-white font-bold rounded-xl border-none"
                    onClick={() => document.getElementById("cart_modal").showModal()}>
                    Cart <ShoppingCart />
                    {cart.length > 0 && (
                        <span className="badge badge-sm ml-2">{cart.length}</span>
                    )}
                </button>
                <dialog id="cart_modal" className="modal modal-end">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-black mb-4">🛒 Your Cart</h3>
                        {cart.length === 0 ? (
                            <p className='flex justify-center mt-65 text-black/50 w-75'>Your cart is empty</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="card border bg-purple-100 w-75 mb-2 p-2">
                                    <p className="font-bold text-lg text-black">{item.name}</p>
                                    <p className='text-black'>${item.price}</p>
                                    <Link to={item.lessonLink} className='btn mt-2' onClick={() => document.getElementById("cart_modal").close()}>View Lessons</Link>
                                </div>
                            ))
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <Link to="/signup" className="btn bg-white text-black border-none px-5 rounded-xl hover:bg-purple-600 hover:text-white shadow-md transition-all font-bold">
                    Sign Up
                </Link>
                <button className="btn btn-ghost text-white font-bold hover:bg-white/10 px-5 rounded-xl border border-white/20"
                    onClick={() => document.getElementById('login').showModal()}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;