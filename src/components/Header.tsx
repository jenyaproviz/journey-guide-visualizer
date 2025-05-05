
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-travel-blue text-2xl font-bold">Voyage</span>
          <span className="text-travel-coral text-2xl font-bold">Planner</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-travel-navy hover:text-travel-blue transition-colors">Dashboard</a>
          <a href="#" className="text-travel-navy hover:text-travel-blue transition-colors">My Trips</a>
          <a href="#" className="text-travel-navy hover:text-travel-blue transition-colors">Explore</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Button>
          <Button className="bg-travel-blue hover:bg-travel-blue/90">
            New Trip
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
