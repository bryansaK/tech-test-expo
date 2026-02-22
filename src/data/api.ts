import axios from 'axios';
import { eventSchema, eventsResponseSchema, type Event } from './schema';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: apiUrl || 'https://api.example.com',
});

type Pagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

type EventsApiResponse = {
  events: Event[];
  pagination: Pagination;
};

export async function fetchEvents(): Promise<Event[]> {
  const response = await api.get<EventsApiResponse>('/events');
  return eventsResponseSchema.parse(response.data.events);
}

type EventDetailApiResponse = {
  events: Event;
};

export async function fetchEventDetails(id: string): Promise<Event> {
  const response = await api.get<EventDetailApiResponse>(`/events/${id}`);
  return eventSchema.parse(response.data.events);
}

export async function fetchUserCalendar(userId: string): Promise<Event[]> {
  const response = await api.get<EventsApiResponse>(`/users/${userId}/calendar`);
  return eventsResponseSchema.parse(response.data.events);
}

type AuthPayload = {
  email: string;
  password: string;
};

type AuthResponse = {
  user: {
    id: string;
    email: string;
  };
};

type AddToCalendarPayload = {
  eventId: string;
};

type AddToCalendarResponse = {
  message: string;
  calendarId: string;
};

export async function login(payload: AuthPayload): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>('/login', payload);
  return response.data;
}

export async function register(payload: AuthPayload): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>('/register', payload);
  return response.data;
}

export async function addEventToCalendar(
  userId: string,
  payload: AddToCalendarPayload,
): Promise<AddToCalendarResponse> {
  const response = await api.post<AddToCalendarResponse>(
    `/users/${userId}/calendar`,
    payload,
  );
  return response.data;
}

