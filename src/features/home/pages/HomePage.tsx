import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

export function HomePage() {
  return (
    <Container style={styles.container} safeAreaEdges={['top']}>
      <ScrollView style={styles.scroll}>
        <Container style={styles.content}>
          <Text size="XL">Test technique</Text>
          <Text size="M" style={styles.enonce}>
            1. Page Détail – Développer l'écran /events/[id] (API, UI, chargement, erreurs)
            {'\n\n'}
            2. Optimisation – Corriger les dettes techniques (performance, TypeScript, mock)
            {'\n\n'}
            3. Bonus – Ajouter l'événement au calendrier
          </Text>
          <Link href="/(tabs)/events" asChild>
            <Text size="M" style={styles.link}>
              Voir la liste des événements
            </Text>
          </Link>
        </Container>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  enonce: {
    marginTop: 8,
    lineHeight: 24,
    opacity: 0.9,
  },
  link: {
    marginTop: 16,
    color: '#29B6F6',
  },
});
