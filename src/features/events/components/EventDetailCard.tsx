import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import { radius } from '@/constants/theme';
import type { Event } from '@/data/schema';
import { formatDate } from '@/helpers';

type EventDetailCardProps = {
  event: Event;
};

export function EventDetailCard({ event }: EventDetailCardProps) {
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

      <Button disabled style={styles.button}>
        Ajouter au calendrier
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
