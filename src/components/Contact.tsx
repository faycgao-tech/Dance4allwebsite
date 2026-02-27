import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Reach out to learn more about Dance4All.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-rose-50 rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-rose-400 rounded-full mb-6 shadow-md">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl mb-4 text-gray-900">Email Us</h2>
            <a 
              href="mailto:dance4allteam@gmail.com"
              className="text-2xl text-purple-700 hover:text-purple-800 transition-colors underline decoration-2 underline-offset-4"
            >
              dance4allteam@gmail.com
            </a>
            <p className="mt-6 text-gray-600 text-lg">
              Whether you have questions, want to get involved, or just want to say hello,
              we're here and ready to connect with you!
            </p>
          </div>

          <div className="border-t border-purple-200 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Instagram className="w-5 h-5" />
              <span className="text-lg">Follow us on Instagram:</span>
              <a 
                href="https://instagram.com/dance4all.team" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-800 transition-colors"
              >
                @dance4all.team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p className="text-lg">
            Dance4All is a student-run nonprofit organization dedicated to boosting 
            the mental and physical health of youth through fun dance experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
