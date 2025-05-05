
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface TripCardProps {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  status: 'upcoming' | 'past' | 'ongoing';
}

const TripCard = ({ id, title, destination, startDate, endDate, imageUrl, status }: TripCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-travel-blue';
      case 'ongoing':
        return 'bg-green-100 text-green-600';
      case 'past':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-blue-100 text-travel-blue';
    }
  };

  return (
    <Card className="trip-card overflow-hidden">
      <div 
        className="h-40 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{title}</h3>
          <Badge className={getBadgeVariant(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <p className="text-travel-gray text-sm">{destination}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 text-travel-gray">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">
            {formatDate(startDate)} - {formatDate(endDate)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-3">
        <a 
          href={`/trip/${id}`} 
          className="text-travel-blue hover:text-travel-blue/80 text-sm font-medium"
        >
          View details
        </a>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
