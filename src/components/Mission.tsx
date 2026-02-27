import React from 'react';
import { Brain, Heart, Users, Smile } from 'lucide-react';

interface MissionProps {
  onContactClick?: () => void;
}

export function Mission({ onContactClick }: MissionProps) {
  const benefits = [
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Dance reduces stress and anxiety while boosting self-esteem and emotional expression.',
      color: 'from-purple-300 to-purple-400'
    },
    {
      icon: Heart,
      title: 'Physical Fitness',
      description: 'Improve cardiovascular health, coordination, and strength through fun movement.',
      color: 'from-rose-300 to-rose-400'
    },
    {
      icon: Users,
      title: 'Social Connection',
      description: 'Build friendships and community in a supportive, inclusive environment.',
      color: 'from-indigo-300 to-indigo-400'
    },
    {
      icon: Smile,
      title: 'Pure Joy',
      description: 'Experience the happiness and freedom that comes from moving to music you love.',
      color: 'from-amber-300 to-amber-400'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Why Dance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dance is more than just movement—it's a powerful tool for building healthier, 
            happier young people. Here's how our programs make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-100 via-rose-50 to-indigo-100 rounded-3xl p-12 text-center border border-purple-200">
          <h2 className="text-3xl mb-4 text-gray-800">Ready to Get Moving?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Join our vibrant community of young dancers and experience the transformative 
            power of movement, music, and connection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-rose-400 text-white rounded-lg hover:from-purple-500 hover:to-rose-500 transition-all shadow-md">
              Register Now
            </button>
            <button 
              onClick={onContactClick}
              className="px-8 py-3 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}