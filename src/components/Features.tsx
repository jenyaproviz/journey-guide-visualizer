
import React from 'react';
import { Calendar, Map, Search } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-travel-blue" />,
    title: 'Smart Itinerary Planning',
    description: 'Create detailed day-by-day travel plans with ease. Add activities, set times, and organize your perfect trip.'
  },
  {
    icon: <Map className="h-8 w-8 text-travel-blue" />,
    title: 'Interactive Maps',
    description: 'Visualize your journey with interactive maps. See all your destinations and get directions between locations.'
  },
  {
    icon: <Search className="h-8 w-8 text-travel-blue" />,
    title: 'AI Recommendations',
    description: 'Get personalized suggestions based on your preferences. Discover hidden gems and popular attractions.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Trip</h2>
          <p className="text-travel-gray max-w-2xl mx-auto">
            Our travel planner makes it easy to organize every detail of your journey, from flights and accommodations to daily activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-travel-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
