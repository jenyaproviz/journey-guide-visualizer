
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
            Your Journey, Perfectly Planned
          </h1>
          <p className="text-travel-navy/80 text-lg md:text-xl mb-8">
            Create detailed travel itineraries, discover amazing destinations, and organize your perfect trip with AI-powered recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-travel-blue hover:bg-travel-blue/90 animate-fade-in">
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-5xl px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Travel Map and Planning" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Discover New Adventures</h3>
                <p className="mb-4">Find inspiration for your next journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
