import React from 'react';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning and AI',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      students: 1234,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      description: 'Deep dive into calculus and linear algebra',
      instructor: 'Prof. Michael Brown',
      duration: '12 weeks',
      students: 856,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      description: 'Master fundamental programming concepts',
      instructor: 'Dr. James Wilson',
      duration: '10 weeks',
      students: 2156,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Browse All Courses
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>{course.rating}/5.0</span>
                </div>
              </div>

              <button className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;