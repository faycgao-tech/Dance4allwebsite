import React from 'react';

export function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1709086566111-dfa0699a6842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBkYW5jaW5nfGVufDF8fHx8MTc2NjcxNjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse students dancing together"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl text-gray-900 mb-6">
              About Dance4All
            </h2>
            <p className="text-gray-600 mb-4">
              Dance4All is a student-run nonprofit organization dedicated to improving the mental and physical 
              well-being of young people through the power of dance and creative movement.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that every young person deserves access to fun, engaging activities that promote health, 
              confidence, and community. Through our programs, we create safe, inclusive spaces where youth can 
              express themselves, build friendships, and develop lifelong healthy habits.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">A world where every young person has access to joyful movement and wellness.</p>
              </div>
              <div className="border-l-4 border-rose-400 pl-4">
                <h3 className="text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-600">Inclusivity, empowerment, creativity, and community-driven impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}