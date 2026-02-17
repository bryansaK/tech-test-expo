import { StyleSheet } from 'react-native';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

export function EventDetailPage() {
  return (
    <Container style={styles.container} safeAreaEdges={['bottom']}>
      <Text size="L" muted>
        Page détail
      </Text>
      <Text size="M" muted style={styles.message}>
        Cette page doit être développée 
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    marginTop: 8,
  },
});
