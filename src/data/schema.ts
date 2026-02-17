import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  location: z.string().optional(),
  imageUrl: z.string().optional(),
});

export const eventsResponseSchema = z.array(eventSchema);

export type Event = z.infer<typeof eventSchema>;
