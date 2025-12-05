import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon?: ReactNode;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  bio?: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  caption: string;
  imageUrl: string;
  type: 'image' | 'video';
}

export interface IndustryItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface JobListing {
  role: string;
  location: string;
  type: string;
}