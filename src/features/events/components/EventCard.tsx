import { useState } from 'react';

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import { radius } from '@/constants/theme';
import type { Event } from '@/data/schema';
import { formatDate } from '@/helpers';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const router = useRouter();
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  return (
    <Pressable
      onPress={() => router.push(`/events/${event.id}` as const)}
      onHoverIn={() => setIsTitleHovered(true)}
      onHoverOut={() => setIsTitleHovered(false)}
      style={({ pressed }) => [pressed && styles.pressed]}>
      <Card style={styles.card}>
        {event.imageUrl ? (
          <Image source={{ uri: event.imageUrl }} style={styles.image} contentFit="cover" />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
        <View style={styles.content}>
          <Badge>{"Culture"}</Badge>
          <Text
            size="L"
            style={styles.title}
            numberOfLines={isTitleHovered ? undefined : 2}
            ellipsizeMode="tail">
            {event.title}
          </Text>
          <Text size="S" muted style={styles.date}>{formatDate(event.date)}</Text>
          {event.location ? (
            <Text size="S" muted style={styles.location}>{event.location}</Text>
          ) : null}
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  card: {
    padding: 12,
    flexDirection: 'row',
    width: '100%',
    maxWidth: 390,
    minHeight: 120,
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: radius.md,
    backgroundColor: '#e0e0e0',
  },
  imagePlaceholder: {
    width: 96,
    height: 96,
    borderRadius: radius.md,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 0,
    gap: 4,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
    flexShrink: 1,
  },
  date: {
    fontSize: 13.7,
    opacity: 0.8,
  },
  location: {
    fontSize: 13.7,
    opacity: 0.7,
  },
});
