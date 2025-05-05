
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-travel-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-travel-blue text-xl font-bold">Voyage</span>
              <span className="text-travel-coral text-xl font-bold">Planner</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your all-in-one travel planning solution. Create itineraries, discover destinations, and make your journey unforgettable.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trip Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Itineraries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Maps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Recommendations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Voyage Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
