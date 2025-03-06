import React from 'react';
import { LineChart, BarChart, Activity, Trophy } from 'lucide-react';

const Progress = () => {
  const subjects = [
    { name: 'Mathematics', progress: 75, hours: 45, mastery: 'Advanced' },
    { name: 'Machine Learning', progress: 60, hours: 30, mastery: 'Intermediate' },
    { name: 'Data Structures', progress: 85, hours: 50, mastery: 'Expert' },
    { name: 'Algorithms', progress: 70, hours: 35, mastery: 'Advanced' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Learning Progress</h1>
        <p className="text-gray-600">Track your educational journey</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <LineChart className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
          </div>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                  <span className="text-sm text-gray-600">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Study Time</h2>
          </div>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{subject.name}</span>
                <span className="text-sm font-medium text-gray-900">{subject.hours} hours</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Mastery Levels</h2>
          </div>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{subject.name}</span>
                <span className="text-sm font-medium text-indigo-600">{subject.mastery}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Achievements</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-900">Completed Advanced Mathematics Module</p>
              <p className="text-xs text-indigo-600 mt-1">Earned Gold Badge</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-900">30-Day Study Streak</p>
              <p className="text-xs text-green-600 mt-1">Earned Consistency Badge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;