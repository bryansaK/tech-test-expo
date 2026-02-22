import { useEffect, useState } from 'react';

import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';
import { fetchUserCalendar } from '@/data/api';
import type { Event } from '@/data/schema';

import { useAuth } from '@/features/auth/AuthContext';
import { EventCard } from './EventCard';

type CalendarProps = {
  userId: string;
};

export function Calendar({ userId }: CalendarProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { calendarVersion } = useAuth();

  useEffect(() => {
    async function loadCalendar() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUserCalendar(userId);
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement du calendrier');
      } finally {
        setLoading(false);
      }
    }

    loadCalendar();
  }, [userId, calendarVersion]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="small" />
        <Text size="S" style={styles.loadingText}>Chargement du calendrier...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text size="S" style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (events.length === 0) {
    return (
      <View style={styles.centered}>
        <Text size="S" muted>Aucun événement à venir dans ton calendrier.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text size="L" style={styles.title}>Mon calendrier</Text>
      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 12,
  },
  title: {
    fontWeight: '600',
  },
  list: {
    maxHeight: 400,
  },
  listContent: {
    gap: 12,
  },
  centered: {
    marginTop: 16,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
  },
  errorText: {
    textAlign: 'center',
    color: '#c62828',
  },
});
