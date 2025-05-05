
import React from 'react';
import TripCard from './TripCard';

const sampleTrips = [
  {
    id: '1',
    title: 'Summer in Barcelona',
    destination: 'Barcelona, Spain',
    startDate: '2025-07-15',
    endDate: '2025-07-22',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Tokyo Adventure',
    destination: 'Tokyo, Japan',
    startDate: '2025-09-10',
    endDate: '2025-09-20',
    imageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'New York Weekend',
    destination: 'New York, USA',
    startDate: '2025-05-04',
    endDate: '2025-05-08',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'ongoing'
  },
  {
    id: '4',
    title: 'Bali Retreat',
    destination: 'Bali, Indonesia',
    startDate: '2025-01-05',
    endDate: '2025-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'past'
  },
  {
    id: '5',
    title: 'Paris Getaway',
    destination: 'Paris, France',
    startDate: '2025-08-15',
    endDate: '2025-08-22',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'upcoming'
  },
  {
    id: '6',
    title: 'Greek Islands',
    destination: 'Santorini, Greece',
    startDate: '2025-06-10',
    endDate: '2025-06-20',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    status: 'upcoming'
  }
];

const Dashboard = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Trips</h2>
          <div className="flex gap-4">
            <button className="text-travel-gray hover:text-travel-navy text-sm font-medium">
              All
            </button>
            <button className="text-travel-gray hover:text-travel-navy text-sm font-medium">
              Upcoming
            </button>
            <button className="text-travel-gray hover:text-travel-navy text-sm font-medium">
              Past
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              title={trip.title}
              destination={trip.destination}
              startDate={trip.startDate}
              endDate={trip.endDate}
              imageUrl={trip.imageUrl}
              status={trip.status as 'upcoming' | 'ongoing' | 'past'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
