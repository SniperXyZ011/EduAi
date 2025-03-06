import React, { useState } from 'react';
import { Brain, BookOpen, MessageCircle, Trophy, Languages, Activity } from 'lucide-react';
import LearningDashboard from './components/LearningDashboard';
import Courses from './components/Courses';
import AiTutor from './components/AiTutor';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import LanguageSettings from './components/LanguageSettings';
import Sidebar from './components/Sidebar';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <LearningDashboard />;
      case 'courses':
        return <Courses />;
      case 'ai-tutor':
        return <AiTutor />;
      case 'progress':
        return <Progress />;
      case 'achievements':
        return <Achievements />;
      case 'language':
        return <LanguageSettings />;
      default:
        return <LearningDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 p-8">
        {renderView()}
      </main>
    </div>
  );
}

export default App;