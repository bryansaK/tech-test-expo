import { Image } from 'expo-image';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import { radius } from '@/constants/theme';
import { addEventToCalendar } from '@/data/api';
import type { Event } from '@/data/schema';
import { useAuth } from '@/features/auth/AuthContext';
import { formatDate } from '@/helpers';

type EventDetailCardProps = {
  event: Event;
};

export function EventDetailCard({ event }: EventDetailCardProps) {
  const { userId, isAuthenticated, bumpCalendarVersion } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  async function handleAddToCalendar() {
    if (!isAuthenticated || !userId) {
      Alert.alert('Connexion requise', 'Connecte-toi pour ajouter un événement à ton calendrier.');
      return;
    }

    try {
      setSubmitting(true);
      await addEventToCalendar(userId, { eventId: event.id });
      bumpCalendarVersion();
      Alert.alert('Succès', 'Événement ajouté à ton calendrier.');
    } catch (err) {
      const message = err instanceof Error ? err.message : "Impossible d'ajouter cet événement";
      Alert.alert('Erreur', message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text size="L" style={styles.title}>{event.title}</Text>
          <Text size="S" muted style={styles.date}>{formatDate(event.date)}</Text>
          {event.location ? (
            <Text size="S" muted style={styles.location}>{event.location}</Text>
          ) : null}
        </View>
        <Badge>{'Concert'}</Badge>
      </View>

      {event.imageUrl ? (
        <Image source={{ uri: event.imageUrl }} style={styles.image} contentFit="cover" />
      ) : null}

      {event.description ? (
        <Text size="S" muted style={styles.description}>{event.description}</Text>
      ) : null}

      <Button
        style={styles.button}
        onPress={handleAddToCalendar}
        disabled={submitting || !isAuthenticated}>
        {submitting ? 'Ajout en cours...' : 'Ajouter au calendrier'}
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    padding: 16,
    gap: 12,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    marginRight: 8,
    gap: 2,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
  },
  date: {
    fontSize: 13.7,
    opacity: 0.8,
  },
  location: {
    fontSize: 13.7,
    opacity: 0.7,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: radius.lg,
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 13.7,
    opacity: 0.9,
  },
  button: {
    alignSelf: 'center',
    marginTop: 12,
  },
});
