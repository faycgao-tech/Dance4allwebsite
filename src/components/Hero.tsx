import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-rose-50 text-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-rose-100/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-5xl lg:text-6xl mb-6">
              Dance Your Way to Better Health
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              A student-run nonprofit organization empowering youth through the transformative power of dance. 
              Building stronger bodies, healthier minds, and confident spirits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-rose-400 text-white rounded-lg hover:from-purple-500 hover:to-rose-500 transition-all shadow-md">
                Join Our Programs
              </button>
              <button className="px-8 py-3 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}