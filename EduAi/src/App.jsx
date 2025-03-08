import React, { useState } from 'react';
import { Brain, BookOpen, MessageCircle, Trophy, Languages, Activity } from 'lucide-react';
import LearningDashboard from './components/LearningDashboard';
import Courses from './components/Courses';
import AiTutor from './components/AiTutor';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import LanguageSettings from './components/LanguageSettings';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setShowLogin(true);
    setCurrentView('dashboard');
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  if (!isAuthenticated) {
    return showLogin ? (
      <Login onToggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
    ) : (
      <Signup onToggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
    );
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <LearningDashboard user={user} />;
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
        return <LearningDashboard user={user} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-1 p-8">
        {renderView()}
      </main>
    </div>
  );
}

export default App;