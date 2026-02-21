import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { fetchEventDetails } from '@/data/api';
import type { Event } from '@/data/schema';

import { EventDetailCard } from '../components/EventDetailCard';

export function EventDetailPage() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadEvent() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEventDetails(String(id));
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur lors du chargement de l'événement");
      } finally {
        setLoading(false);
      }
    }

    loadEvent();
  }, [id]);

  return (
    <Container style={styles.container} safeAreaEdges={['bottom']}>
      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
        </View>
      ) : error || !event ? (
        <View style={styles.centered}>
          <Text size="M" muted>
            {error ?? "Événement introuvable"}
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.cardWrapper}>
            <EventDetailCard event={event} />
          </View>
        </ScrollView>
      )}
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
  },
  scrollContent: {
    padding: 20,
  },
  cardWrapper: {
    flex: 1,
  },
});
