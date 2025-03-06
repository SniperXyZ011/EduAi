import React from 'react';
import { Brain, Sparkles, Target, Clock } from 'lucide-react';

const LearningDashboard = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
          <p className="text-gray-600 mt-1">Your personalized learning journey continues</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Start Learning
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Daily Goal</p>
              <p className="text-xl font-semibold text-gray-900">85% Complete</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Study Time</p>
              <p className="text-xl font-semibold text-gray-900">2.5 hrs today</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Concepts Mastered</p>
              <p className="text-xl font-semibold text-gray-900">24 this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Sparkles className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Achievement Points</p>
              <p className="text-xl font-semibold text-gray-900">1,250 pts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Learning Path</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Introduction to Machine Learning',
                progress: 65,
                image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
              },
              {
                title: 'Advanced Mathematics',
                progress: 40,
                image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
              },
            ].map((course, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{course.title}</h3>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Tutor Insights</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                You're showing strong progress in algorithmic thinking! Consider taking our advanced
                problem-solving course next.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                We've noticed you might need more practice with calculus concepts. Would you like to
                review derivatives?
              </p>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Chat with AI Tutor
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;