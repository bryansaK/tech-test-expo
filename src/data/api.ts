import axios from 'axios';
import { eventSchema, eventsResponseSchema, type Event } from './schema';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Concert de jazz',
    description: 'Une soirée jazz inoubliable avec des artistes locaux.',
    date: '2025-03-15T20:00:00.000Z',
    location: 'Paris, Le Sunset',
    imageUrl: 'https://picsum.photos/seed/jazz/200/200',
  },
  {
    id: '2',
    title: 'Meetup développeurs',
    description: 'Échanges sur React Native et Expo.',
    date: '2025-03-20T18:30:00.000Z',
    location: 'Lyon, La Cordée',
    imageUrl: 'https://picsum.photos/seed/meetup/200/200',
  },
  {
    id: '3',
    title: 'Exposition photo',
    description: 'Découvrez les œuvres de photographes émergents.',
    date: '2025-04-01T10:00:00.000Z',
    location: 'Bordeaux, CAPC',
    imageUrl: 'https://picsum.photos/seed/expo/200/200',
  },
];

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const useMock = !apiUrl || apiUrl === 'https://api.example.com';

const api = axios.create({
  baseURL: apiUrl || 'https://api.example.com',
});

export async function fetchEvents(): Promise<Event[]> {
  if (useMock) {
    return MOCK_EVENTS;
  }
  const response = await api.get<unknown>('/events');
  return eventsResponseSchema.parse(response.data);
}

// TODO: Add API calls for event detail
