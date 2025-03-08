import React from 'react';
import { Brain, BookOpen, MessageCircle, Trophy, Languages, Activity, LogOut } from 'lucide-react';
import axios from 'axios';

const Sidebar = ({ currentView, setCurrentView, user, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: Brain, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'My Courses' },
    { id: 'ai-tutor', icon: MessageCircle, label: 'AI Tutor' },
    { id: 'progress', icon: Activity, label: 'Progress' },
    { id: 'achievements', icon: Trophy, label: 'Achievements' },
    { id: 'language', icon: Languages, label: 'Language' },
  ];

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/api/v1/user/logout', {
        withCredentials: true
      });
      onLogout();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-800">EduAI</h1>
      </div>
      
      {/* User Info */}
      {user && (
        <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm font-medium text-indigo-900">{user.fullName}</p>
          <p className="text-xs text-indigo-600">@{user.userName}</p>
        </div>
      )}

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-200'
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

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;