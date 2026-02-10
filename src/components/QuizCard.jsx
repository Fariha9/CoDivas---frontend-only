import { ArrowRight } from "lucide-react";

export default function QuizCard({ quiz }) {
  return (
    <div className="card bg-purple-100 shadow-lg hover:shadow-2xl transition-all border border-purple-300 rounded-xl overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={quiz.image}
          alt={quiz.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800">{quiz.title}</h2>
        <p className="opacity-80 text-gray-700 text-sm">{quiz.description}</p>

        {/* Start button */}
        <div className="flex items-center justify-end mt-4">
<button
  className="bg-transparent text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white px-6 py-3 font-semibold shadow-lg transition-colors flex items-center gap-2"
  onClick={() => quiz.onStart(quiz.id)}
>
  Start <ArrowRight size={16} />
</button>


        </div>
      </div>
    </div>
  );
}
