export interface ServicePillar {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  iconName: 'cleaning' | 'mowing' | 'landscaping' | 'maintenance';
  themeColor: string; // 'blue' | 'green' | 'orange' | 'slate'
  badgeBg: string;
  subServices: string[];
  detailedDescription: string;
  features: string[];
}

export interface ClientSector {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
