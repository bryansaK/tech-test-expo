import { StyleSheet, View } from 'react-native';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { useAuth } from '@/features/auth/AuthContext';
import { EventListPage } from '@/features/events/pages/EventListPage';

export default function EventsScreen() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Container style={styles.container} safeAreaEdges={['top']}>
        <View style={styles.centered}>
          <Text size="L">Accès réservé</Text>
          <Text size="M" muted style={styles.message}>
            {"Merci de vous connecter sur l'écran d'accueil pour voir les événements."}
          </Text>
        </View>
      </Container>
    );
  }

  return <EventListPage />;
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
  message: {
    marginTop: 8,
    textAlign: 'center',
  },
});
