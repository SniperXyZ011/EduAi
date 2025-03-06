import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { id: 'english', name: 'English', native: 'English' },
    { id: 'spanish', name: 'Spanish', native: 'Español' },
    { id: 'french', name: 'French', native: 'Français' },
    { id: 'german', name: 'German', native: 'Deutsch' },
    { id: 'chinese', name: 'Chinese', native: '中文' },
    { id: 'japanese', name: 'Japanese', native: '日本語' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Language Settings</h1>
        <p className="text-gray-600">Choose your preferred language</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Interface Language</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={`p-4 rounded-lg border ${
                selectedLanguage === language.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
              } transition-colors`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{language.name}</p>
                  <p className="text-sm text-gray-600">{language.native}</p>
                </div>
                {selectedLanguage === language.id && (
                  <Check className="w-5 h-5 text-indigo-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Language Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Content Translation</p>
              <p className="text-sm text-gray-600">
                Automatically translate course content
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer -checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Subtitles</p>
              <p className="text-sm text-gray-600">
                Show subtitles in selected language
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSettings;