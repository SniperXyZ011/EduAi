import React from 'react';
import { Brain, BookOpen, MessageCircle, Trophy, Languages, Activity } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', icon: Brain, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'My Courses' },
    { id: 'ai-tutor', icon: MessageCircle, label: 'AI Tutor' },
    { id: 'progress', icon: Activity, label: 'Progress' },
    { id: 'achievements', icon: Trophy, label: 'Achievements' },
    { id: 'language', icon: Languages, label: 'Language' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-800">EduAI</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;