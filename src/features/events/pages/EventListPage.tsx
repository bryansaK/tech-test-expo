import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { fetchEvents } from '@/data/api';
import type { Event } from '@/data/schema';

import { EventCard } from '../components/EventCard';

export function EventListPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des événements');
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  if (loading) {
    return (
      <Container style={styles.centered} safeAreaEdges={['top']}>
        <ActivityIndicator size="large" />
        <Text size="M" style={styles.loadingText}>Chargement...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={styles.centered} safeAreaEdges={['top']}>
        <Text size="L" style={styles.errorText}>
          {error}
        </Text>
      </Container>
    );
  }

  return (
    <Container style={styles.container} safeAreaEdges={['top']}>
      <ScrollView style={styles.scroll}>
        <Container style={styles.content}>
          <Text size="XL">Événements</Text>
          {events.length === 0 ? (
            <Text size="M" muted style={styles.emptyText}>Aucun événement</Text>
          ) : (
            events.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </Container>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
  },
  errorText: {
    textAlign: 'center',
    color: '#c62828',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  emptyText: {
    textAlign: 'center',
    opacity: 0.7,
  },
});
