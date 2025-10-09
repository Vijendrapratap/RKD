// Database Types based on the schema

export interface ServiceMaster {
  id: string;
  service: string;
  created_by: string;
  created_at: Date;
  status: 'active' | 'inactive';
}

export interface ServiceLocality {
  id: string;
  service_id: string;
  locality: string;
  locality_type: 'apartment' | 'nukkad' | 'tehsil' | 'city' | 'district' | 'country';
  created_at: Date;
  created_by: string;
  status: 'active' | 'inactive';
}

export interface UrlMaster {
  id: string;
  url: string;
  status: 'active' | 'inactive';
}

export interface UrlMetadata {
  id: string;
  url_id: string;
  url: string;
  title: string;
  description: string;
  robots: string;
  viewport: string;
  keywords: string;
  image: string;
  twitter_card: string;
}

export interface UrlContent {
  id: string;
  url_id: string;
  url: string;
  h1_heading: string;
  content: string;
  status: 'active' | 'inactive';
}

// Combined types for easier usage
export interface LocationWithServices {
  slug: string;
  name: string;
  state: string;
  services: ServiceMaster[];
  metadata: UrlMetadata;
  content: UrlContent;
}
