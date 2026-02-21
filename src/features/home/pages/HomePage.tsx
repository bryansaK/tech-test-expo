import { useState } from 'react';

import { Link } from 'expo-router';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { useAuth } from '@/features/auth/AuthContext';
import { navigate } from 'expo-router/build/global-state/routing';

export function HomePage() {
  const { isAuthenticated, login, register, email: authEmail, logout  } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    try {
      setSubmitting(true);
      setError(null);
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password);
      }
      if (isAuthenticated) {
        navigate('/(tabs)/events');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container style={styles.container} safeAreaEdges={['top']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Container style={styles.content}>
          <Text size="XL">Bienvenue</Text>
          <Text size="M" style={styles.subtitle}>
            {isAuthenticated ? `Connecté en tant que ${authEmail}` : 'Connecte-toi pour accéder aux événements.'}
          </Text>
        {isAuthenticated? null :
          <View style={styles.form}>
            <Text size="S" muted>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholder="email@example.com"
            />
            <Text size="S" muted style={styles.labelPassword}>Mot de passe</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              placeholder="********"
            />

            {error ? (
              <Text size="S" muted style={styles.error}>
                {error}
              </Text>
            ) : null}

            <Button
              onPress={handleSubmit}
              disabled={submitting || !email || !password}
              color="blue">
              {mode === 'login' ? 'Login' : "S'inscrire"}
            </Button>

            <Button
              onPress={() => setMode(mode === 'login' ? 'signup' : 'login')}
              color="neutral"
              size="sm"
              style={styles.switchButton}>
              {mode === 'login' ? "Créer un compte" : 'Déjà un compte ? Login'}
            </Button>
          </View>
}
          {isAuthenticated ? (
            <Link href="/(tabs)/events" asChild>
              <Text size="M" style={styles.link}>
                Accéder à la liste des événements
              </Text>
            </Link>
          ) : null}
          {isAuthenticated ? (
            <Button  style={styles.logoutButton} onPress={() => logout()} color="blue">
              logout
            </Button>
          ) : null}
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
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  subtitle: {
    marginTop: 8,
    lineHeight: 22,
    opacity: 0.9,
  },
  form: {
    marginTop: 24,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 4,
  },
  labelPassword: {
    marginTop: 12,
  },
  error: {
    marginTop: 8,
    color: '#c62828',
  },
  switchButton: {
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: '#c62828',
    marginTop: 8,
  },
  link: {
    marginTop: 24,
    color: '#29B6F6',
  },
});
