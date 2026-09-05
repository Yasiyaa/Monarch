import { ServicePillar, ClientSector, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Monarch Services',
  tagline: 'ONE TEAM. COMPLETE PROPERTY CARE.',
  slogan: 'Cleaner Spaces. Greener Tomorrow.',
  phonePrimary: '0404 699 145',
  phoneSecondary: '0426 991 449',
  email: 'info@monarchservices.com.au',
  address: '294 Thomas St, Dandenong VIC 3175',
  serviceAreas: 'Dandenong, Melbourne South-East, and Greater Melbourne Suburbs',
  hours: 'Mon - Sat: 7:00 AM - 6:00 PM | Sun: By Appointment',
  abn: 'ABN Registered & Fully Insured ($20M Public Liability)',
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    shortDesc: 'Residential & commercial cleaning solutions for healthier, cleaner spaces.',
    image: '/images/service-cleaning.jpg',
    iconName: 'cleaning',
    themeColor: 'blue',
    badgeBg: 'bg-blue-600',
    subServices: [
      'Domestic cleaning',
      'Commercial cleaning',
      'Regular & deep cleaning',
      'End-of-lease cleaning (Bond back guarantee)',
      'Window cleaning',
      'Carpet steam cleaning',
      'High-pressure cleaning',
    ],
    detailedDescription: 'Whether it is your family home, an end-of-lease tenancy inspection, or a high-traffic corporate office, our professional cleaning team uses hospital-grade, eco-friendly detergents and commercial extraction equipment to deliver sparkling, hygienic results.',
    features: [
      '100% Bond Back Guarantee on End-of-Lease cleans',
      'Trained, vetted & police-checked personnel',
      'Eco-friendly, non-toxic sanitizing products',
      'Customized cleaning schedules (Daily, Weekly, Fortnightly)',
    ],
  },
  {
    id: 'lawn-mowing',
    title: 'Lawn Mowing & Garden Care',
    shortDesc: 'Keep your outdoor areas tidy, healthy and well maintained all year round.',
    image: '/images/service-mowing.jpg',
    iconName: 'mowing',
    themeColor: 'green',
    badgeBg: 'bg-green-600',
    subServices: [
      'Lawn mowing & edging',
      'Hedge trimming',
      'Whipper snipping',
      'Pruning & weeding',
      'Garden maintenance',
      'Garden clean-ups',
      'Green waste removal',
    ],
    detailedDescription: 'From razor-sharp lawn striping and border edging to dense hedge trimming and thorough weed extraction, we maintain vibrant, healthy outdoor grounds that elevate your street appeal in every Melbourne season.',
    features: [
      'Commercial precision mowers and edging equipment',
      'Full green waste disposal included',
      'Seasonal aeration, fertilising and weed management',
      'Dependable scheduled recurring visits',
    ],
  },
  {
    id: 'landscaping',
    title: 'Landscaping Services',
    shortDesc: 'Transform and enhance your property with our landscaping solutions.',
    image: '/images/service-landscaping.jpg',
    iconName: 'landscaping',
    themeColor: 'orange',
    badgeBg: 'bg-emerald-600',
    subServices: [
      'Garden makeovers',
      'Planting & mulching',
      'Turf installation (Natural & Synthetic)',
      'Garden beds & retaining',
      'Landscape design',
      'Outdoor improvements',
    ],
    detailedDescription: 'Elevate the beauty, functionality, and market value of your residential or commercial property. Our landscaping specialists design and construct durable, low-maintenance outdoor spaces suited to Victoria’s climate.',
    features: [
      'Drought-tolerant plant selection and soil enrichment',
      'Premium instant turf and artificial grass installation',
      'Modern pebble, mulch, and timber border design',
      'Tailored solutions for real estate and landlords',
    ],
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    shortDesc: 'General maintenance and handyman services for homes and businesses.',
    image: '/images/service-maintenance.jpg',
    iconName: 'maintenance',
    themeColor: 'slate',
    badgeBg: 'bg-slate-700',
    subServices: [
      'General handyman services',
      'Minor repairs & painting touch-ups',
      'Door & lock replacement',
      'Gutter cleaning & downpipe flushing',
      'Fence & gate repairs',
      'General property upkeep',
    ],
    detailedDescription: 'Avoid juggling multiple contractors. Our skilled property maintenance team tackles small to medium repairs, safety fixes, gutter cleans, and cosmetic carpentry so your assets remain pristine and compliant.',
    features: [
      'Fully equipped with professional trade tools',
      'Rapid response for urgent repair items',
      'Detailed inspection reporting for property managers',
      'One consolidated invoice for all maintenance tasks',
    ],
  },
];

export const CLIENT_SECTORS: ClientSector[] = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Homes, apartments, townhouses, rental properties and more. Thorough care for where you live.',
    image: '/images/property-townhouse.jpg',
    tags: ['Townhouses', 'Detached Homes', 'Apartments', 'Rental Turnovers'],
    icon: 'home',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Small offices, retail stores, cafes, and business spaces. Clean, professional workplaces that impress.',
    image: '/images/commercial-office.jpg',
    tags: ['Offices', 'Retail Stores', 'Showrooms', 'Corporate Suites'],
    icon: 'building',
  },
  {
    id: 'real-estate',
    title: 'Property & Real Estate',
    description: 'Real estate agents, property managers, and landlords. One supplier. Multiple services. Less administration.',
    image: '/images/property-apartment.jpg',
    tags: ['End of Lease', 'Strata Common Areas', 'Pre-sale Makeovers', 'Inspection Ready'],
    icon: 'briefcase',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Restaurants, cafés, pubs, clubs, function centres and event venues with stringent sanitation standards.',
    image: '/images/commercial-hospitality.jpg',
    tags: ['Cafes & Bistros', 'Restaurants', 'Dining Rooms', 'Outdoor Patios'],
    icon: 'utensils',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Monarch Services are reliable, professional and do an outstanding job every time. Our office has never looked better!',
    author: 'Sarah T.',
    role: 'Office Manager, Melbourne CBD',
    rating: 5,
  },
  {
    quote: 'They take care of our cleaning, lawn mowing and maintenance. One team, one invoice, no stress! Highly recommended for any property investor.',
    author: 'James R.',
    role: 'Property Investor, Dandenong',
    rating: 5,
  },
  {
    quote: 'We use Monarch for end-of-lease cleans and gardening. They are fast, friendly and always deliver great results for our rental inspections.',
    author: 'Priya M.',
    role: 'Real Estate Agent, South-East VIC',
    rating: 5,
  },
  {
    quote: 'The lawn striping and hedge trimming transformed our front garden. Reliable fortnightly service that always turns up on time.',
    author: 'David & Lisa K.',
    role: 'Homeowners, Berwick',
    rating: 5,
  },
  {
    quote: 'Managing a 16-unit strata complex is demanding, but Monarch handles the common area cleaning and pressure washing flawlessly.',
    author: 'Marcus B.',
    role: 'Strata Committee Chair, Glen Waverley',
    rating: 5,
  },
  {
    quote: 'Spotless restaurant floor care and window cleaning after hours. Hospital-grade cleanliness and thorough attention to detail.',
    author: 'Elena S.',
    role: 'Hospitality Venue Director, St Kilda',
    rating: 5,
  },
];

export const FOUR_STEP_PROCESS = [
  {
    step: '1',
    title: 'Contact Us',
    desc: 'Call, email or submit an enquiry. Tell us what your property needs.',
  },
  {
    step: '2',
    title: 'Get a Quote',
    desc: 'We assess the job and provide a clear, upfront and transparent quote.',
  },
  {
    step: '3',
    title: 'We Get to Work',
    desc: 'Our uniformed team arrives on time and completes the work to a high standard.',
  },
  {
    step: '4',
    title: 'You Relax',
    desc: 'Enjoy a clean, well-maintained property and complete peace of mind.',
  },
];
