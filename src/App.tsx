import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Mission } from './components/Mission';
import { BoardMembers } from './components/BoardMembers';
import { Contact } from './components/Contact';
import { Users, Home, Mail } from 'lucide-react';
import yonasImage from 'figma:asset/4c78a344251ce018b3c195d3fdc4bfeb6805fd27.png';
import rachelImage from 'figma:asset/74e4f520e9f7369cb62065161553e5ef3c4c11ec.png';
import fayImage from 'figma:asset/9bfb24a11fabff2747f54a8d6d32a5b34c196cbc.png';

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  introduction: string;
  imageUrl: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'board' | 'contact'>('home');
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([
    {
      id: '1',
      name: 'Yonas Amare',
      position: 'Founder',
      introduction: 'Hello!! My name is Yonas and I am so excited to hit the ground running with danceall! I have danced for the past 2 years and love hip-hop and high energy dances! Other than that, I love chemistry and baking for my friends and family! My favorite thing about dancing is the wide variety and cultures that fall under it!',
      imageUrl: yonasImage
    },
    {
      id: '2',
      name: 'Rachel John',
      position: 'Hip Hop Head',
      introduction: 'Hey everyone! My name is Rachel and I\'m so excited to be a part of dance4all!! I can\'t wait to teach hip hop it\'s gonna be so fun! I have danced in hip hop for 10 years now. My favorite thing about dance is to have fun and find your own style and expressing yourself!',
      imageUrl: rachelImage
    },
    {
      id: '3',
      name: 'Fay Gao',
      position: 'Ballet Head',
      introduction: 'Hi!! My name is Fay and I\'m so excited to ballet head this year. I\'ve been dancing since I was 4 and have trained in all sorts of styles including ballet, chinese, modern, contemperary, hip hop, flamenco, and african! Out of everything I\'ve tried, ballet has always been my favorite because I love the elegance, fluidity, and expressiveness of its movements. I\'m looking forward to an amazing year of dancing, learning, and growing together with all of you!',
      imageUrl: fayImage
    }
  ]);

  const handleAddMember = (member: Omit<BoardMember, 'id'>) => {
    const newMember: BoardMember = {
      ...member,
      id: Date.now().toString()
    };
    setBoardMembers([...boardMembers, newMember]);
  };

  const handleDeleteMember = (id: string) => {
    setBoardMembers(boardMembers.filter(member => member.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-rose-400 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">D4A</span>
              </div>
              <span className="text-xl text-gray-900">Dance4All</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'home'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={() => setActiveTab('board')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'board'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="w-4 h-4" />
                Board Members
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero />
            <About />
            <Mission onContactClick={() => setActiveTab('contact')} />
          </>
        )}
        {activeTab === 'board' && (
          <BoardMembers members={boardMembers} onDelete={handleDeleteMember} />
        )}
        {activeTab === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-rose-400 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white text-xl">D4A</span>
                </div>
                <span className="text-xl">Dance4All</span>
              </div>
              <p className="text-gray-400">
                Empowering youth through the joy of dance and movement.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Contact</h3>
              <p className="text-gray-400">Email: dance4allteam@gmail.com</p>
              <p className="text-gray-400">Instagram: @dance4all.team</p>
            </div>
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Involved</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dance4All. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}