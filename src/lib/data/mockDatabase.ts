// Mock Database Implementation
// Replace this with actual database calls when implementing backend

import { ServiceMaster, ServiceLocality, UrlMaster, UrlMetadata, UrlContent } from '../types/database';

// Master Services List
export const serviceMasterData: ServiceMaster[] = [
  { id: 'srv_1', service: 'Plumbing', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_2', service: 'Electrician', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_3', service: 'AC Repair', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_4', service: 'Cleaning', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_5', service: 'Painting', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_6', service: 'Carpentry', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_7', service: 'Appliance Repair', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_8', service: 'Pest Control', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_9', service: 'Gardening', created_by: 'admin', created_at: new Date(), status: 'active' },
  { id: 'srv_10', service: 'TV Installation', created_by: 'admin', created_at: new Date(), status: 'active' },
];

// Service-Locality Mapping (which services are available in which cities)
export const serviceLocalityData: ServiceLocality[] = [
  // Lucknow - All services
  { id: 'sl_1', service_id: 'srv_1', locality: 'lucknow', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_2', service_id: 'srv_2', locality: 'lucknow', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_3', service_id: 'srv_3', locality: 'lucknow', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_4', service_id: 'srv_4', locality: 'lucknow', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_5', service_id: 'srv_5', locality: 'lucknow', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },

  // Delhi - Limited services
  { id: 'sl_6', service_id: 'srv_1', locality: 'delhi', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_7', service_id: 'srv_2', locality: 'delhi', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_8', service_id: 'srv_3', locality: 'delhi', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_9', service_id: 'srv_7', locality: 'delhi', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },

  // Mumbai - Different set of services
  { id: 'sl_10', service_id: 'srv_1', locality: 'mumbai', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_11', service_id: 'srv_2', locality: 'mumbai', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_12', service_id: 'srv_4', locality: 'mumbai', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_13', service_id: 'srv_5', locality: 'mumbai', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_14', service_id: 'srv_8', locality: 'mumbai', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },

  // Bangalore - Tech city services
  { id: 'sl_15', service_id: 'srv_2', locality: 'bangalore', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_16', service_id: 'srv_3', locality: 'bangalore', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_17', service_id: 'srv_7', locality: 'bangalore', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
  { id: 'sl_18', service_id: 'srv_10', locality: 'bangalore', locality_type: 'city', created_at: new Date(), created_by: 'admin', status: 'active' },
];

// URL Master (city URLs)
export const urlMasterData: UrlMaster[] = [
  { id: 'url_1', url: '/lucknow', status: 'active' },
  { id: 'url_2', url: '/delhi', status: 'active' },
  { id: 'url_3', url: '/mumbai', status: 'active' },
  { id: 'url_4', url: '/bangalore', status: 'active' },
  { id: 'url_5', url: '/hyderabad', status: 'active' },
  { id: 'url_6', url: '/pune', status: 'active' },
  { id: 'url_7', url: '/kolkata', status: 'active' },
  { id: 'url_8', url: '/chennai', status: 'active' },
];

// URL Metadata (SEO data)
export const urlMetadataData: UrlMetadata[] = [
  {
    id: 'meta_1',
    url_id: 'url_1',
    url: '/lucknow',
    title: 'Home Services in Lucknow | RKD - Repair ki Dukaan',
    description: 'Professional home services in Lucknow. Book verified experts for plumbing, electrical, AC repair, and more. Available 24/7.',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    keywords: 'home services lucknow, plumber lucknow, electrician lucknow, AC repair lucknow',
    image: '/logo.png',
    twitter_card: 'summary_large_image'
  },
  {
    id: 'meta_2',
    url_id: 'url_2',
    url: '/delhi',
    title: 'Home Services in Delhi NCR | RKD - Expert Home Repairs',
    description: 'Get trusted home services in Delhi NCR. Plumbing, electrical work, appliance repair, and more at your doorstep.',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    keywords: 'home services delhi, plumber delhi, electrician delhi, repair services delhi',
    image: '/logo.png',
    twitter_card: 'summary_large_image'
  },
  {
    id: 'meta_3',
    url_id: 'url_3',
    url: '/mumbai',
    title: 'Mumbai Home Services | RKD - Professional Repair Services',
    description: 'Quality home services across Mumbai. Experienced professionals for all your home repair and maintenance needs.',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    keywords: 'home services mumbai, plumber mumbai, painting services mumbai, cleaning services mumbai',
    image: '/logo.png',
    twitter_card: 'summary_large_image'
  },
  {
    id: 'meta_4',
    url_id: 'url_4',
    url: '/bangalore',
    title: 'Bangalore Home Services | RKD - Tech-Enabled Repairs',
    description: 'Smart home services in Bangalore. Quick booking, verified professionals, and transparent pricing for all repairs.',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    keywords: 'home services bangalore, electrician bangalore, AC service bangalore, appliance repair bangalore',
    image: '/logo.png',
    twitter_card: 'summary_large_image'
  },
];

// URL Content (page content)
export const urlContentData: UrlContent[] = [
  {
    id: 'content_1',
    url_id: 'url_1',
    url: '/lucknow',
    h1_heading: 'Professional Home Services in Lucknow',
    content: 'Welcome to RKD\'s comprehensive home services in Lucknow. We offer a wide range of services including plumbing, electrical work, AC repair, cleaning, and painting. Our verified professionals ensure quality work at competitive prices.',
    status: 'active'
  },
  {
    id: 'content_2',
    url_id: 'url_2',
    url: '/delhi',
    h1_heading: 'Trusted Home Repair Services in Delhi NCR',
    content: 'RKD brings reliable home services to Delhi NCR. From emergency plumbing to appliance repairs, our skilled technicians are ready to help 24/7.',
    status: 'active'
  },
  {
    id: 'content_3',
    url_id: 'url_3',
    url: '/mumbai',
    h1_heading: 'Expert Home Services Across Mumbai',
    content: 'Experience hassle-free home maintenance in Mumbai with RKD. Our services include plumbing, painting, cleaning, and pest control by verified professionals.',
    status: 'active'
  },
  {
    id: 'content_4',
    url_id: 'url_4',
    url: '/bangalore',
    h1_heading: 'Smart Home Services in Bangalore',
    content: 'Bangalore\'s trusted platform for home repairs and maintenance. Book electricians, AC technicians, and appliance repair experts instantly.',
    status: 'active'
  },
];

// Helper functions to query the mock database
export const getServicesForLocality = (locality: string): ServiceMaster[] => {
  const activeServiceIds = serviceLocalityData
    .filter(sl => sl.locality === locality && sl.status === 'active')
    .map(sl => sl.service_id);

  return serviceMasterData.filter(service =>
    activeServiceIds.includes(service.id) && service.status === 'active'
  );
};

export const getUrlMetadata = (url: string): UrlMetadata | undefined => {
  return urlMetadataData.find(meta => meta.url === url);
};

export const getUrlContent = (url: string): UrlContent | undefined => {
  return urlContentData.find(content => content.url === url && content.status === 'active');
};

export const getAllActiveUrls = (): string[] => {
  return urlMasterData
    .filter(url => url.status === 'active')
    .map(url => url.url.replace('/', ''));
};
