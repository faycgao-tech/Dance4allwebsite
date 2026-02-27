import React from 'react';
import { Trash2 } from 'lucide-react';
import { BoardMember } from '../App';

interface BoardMembersProps {
  members: BoardMember[];
  onDelete: (id: string) => void;
}

export function BoardMembers({ members, onDelete }: BoardMembersProps) {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-gray-900 mb-4">
            Our Board Members
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate student leaders who make Dance4All possible. Our dedicated board 
            members bring diverse talents, experiences, and a shared commitment to youth wellness.
          </p>
        </div>

        {members.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No board members yet. Add your first member using the "Add Member" tab!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.introduction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}