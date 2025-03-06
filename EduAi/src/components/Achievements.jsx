import React from 'react';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Quick Learner',
      description: 'Completed 5 courses in record time',
      icon: Trophy,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      progress: 100,
    },
    {
      id: 2,
      title: 'Problem Solver',
      description: 'Solved 100 practice problems',
      icon: Star,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      progress: 75,
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Spent 50 hours learning',
      icon: Award,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      progress: 90,
    },
    {
      id: 4,
      title: 'Consistent Learner',
      description: '30-day study streak',
      icon: Medal,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      progress: 60,
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Achievements</h1>
        <p className="text-gray-600">Track your learning milestones</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className={`${achievement.bg} ${achievement.border} border rounded-xl p-6`}
            >
              <div className="flex flex-col items-center text-center">
                <Icon className={`w-12 h-12 ${achievement.color} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                <div className="w-full bg-white rounded-full h-2">
                  <div
                    className={`${achievement.color.replace('text', 'bg')} h-2 rounded-full`}
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-2">
                  {achievement.progress}% Complete
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Milestones</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
            <Trophy className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-medium text-gray-900">Course Completion Master</h3>
              <p className="text-sm text-gray-600">
                Completed "Advanced Mathematics" with a 95% score
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
            <Award className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-medium text-gray-900">Perfect Attendance</h3>
              <p className="text-sm text-gray-600">
                Maintained a 30-day learning streak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;