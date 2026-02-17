import { ScrollView, StyleSheet, View } from 'react-native';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import {
  background,
  bluePop,
  Colors,
  greenPop,
  surface,
} from '@/constants/theme';

const colorSwatches = [
  { name: 'Background', hex: background },
  { name: 'Surface', hex: surface },
  { name: 'Bleu pop', hex: bluePop },
  { name: 'Vert pop', hex: greenPop },
  { name: 'Foreground', hex: Colors.foreground },
  { name: 'Foreground muted', hex: Colors.foregroundMuted },
];

export function DesignPage() {
  return (
    <Container style={styles.container} safeAreaEdges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text size="XL" style={styles.pageTitle}>
          Composants
        </Text>

        {/* Section Couleurs */}
        <View style={styles.section}>
          <Text size="L" style={styles.sectionTitle}>
            Couleurs
          </Text>
          <Card style={styles.sectionCard}>
            <View style={styles.colorGrid}>
              {colorSwatches.map((swatch) => (
                <View key={swatch.hex} style={styles.colorItem}>
                  <View
                    style={[
                      styles.colorSwatch,
                      {
                        backgroundColor: swatch.hex,
                        borderWidth: swatch.hex === background || swatch.hex === surface ? 1 : 0,
                        borderColor: '#E0E0E0',
                      },
                    ]}
                  />
                  <Text size="XS" style={styles.colorName}>
                    {swatch.name}
                  </Text>
                  <Text size="XS" muted>
                    {swatch.hex}
                  </Text>
                </View>
              ))}
            </View>
          </Card>
        </View>

        {/* Section Text */}
        <View style={styles.section}>
          <Text size="L" style={styles.sectionTitle}>
            Text
          </Text>
          <Card style={styles.sectionCard}>
            <Text size="XL">XL - Titre principal</Text>
            <Text size="L">L - Sous-titre</Text>
            <Text size="M">M - Texte standard</Text>
            <Text size="S">S - Texte secondaire</Text>
            <Text size="XS">XS - Petit texte</Text>
            <Text size="M" muted>
              Muted - Texte atténué
            </Text>
          </Card>
        </View>

        {/* Section Button */}
        <View style={styles.section}>
          <Text size="L" style={styles.sectionTitle}>
            Button
          </Text>
          <Card style={styles.sectionCard}>
            <Text size="S" muted style={styles.subtitle}>
              Couleurs
            </Text>
            <View style={styles.row}>
              <Button color="blue" onPress={() => {}}>
                Blue
              </Button>
              <Button color="green" onPress={() => {}}>
                Green
              </Button>
              <Button color="neutral" onPress={() => {}}>
                Neutral
              </Button>
            </View>
            <Text size="S" muted style={styles.subtitle}>
              Tailles
            </Text>
            <View style={styles.row}>
              <Button size="sm" onPress={() => {}}>
                Small
              </Button>
              <Button size="md" onPress={() => {}}>
                Medium
              </Button>
              <Button size="lg" onPress={() => {}}>
                Large
              </Button>
            </View>
            <View style={styles.row}>
              <Button disabled onPress={() => {}}>
                Disabled
              </Button>
            </View>
          </Card>
        </View>

        {/* Section Badge */}
        <View style={styles.section}>
          <Text size="L" style={styles.sectionTitle}>
            Badge
          </Text>
          <Card style={styles.sectionCard}>
            <View style={styles.row}>
              <Badge color="blue">Blue</Badge>
              <Badge color="green">Green</Badge>
              <Badge color="neutral">Neutral</Badge>
            </View>
            <View style={styles.row}>
              <Badge color="blue">Nouveau</Badge>
              <Badge color="green">Validé</Badge>
              <Badge color="neutral">En attente</Badge>
            </View>
          </Card>
        </View>

        {/* Section Card */}
        <View style={styles.section}>
          <Text size="L" style={styles.sectionTitle}>
            Card
          </Text>
          <View style={styles.cardsRow}>
            <Card variant="elevated" style={styles.cardExample}>
              <Text size="M" style={styles.cardTitle}>
                Elevated
              </Text>
              <Text size="S" muted>
                Ombre légère
              </Text>
            </Card>
            <Card variant="outlined" style={styles.cardExample}>
              <Text size="M" style={styles.cardTitle}>
                Outlined
              </Text>
              <Text size="S" muted>
                Bordure visible
              </Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  pageTitle: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  sectionCard: {
    padding: 16,
    gap: 12,
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cardExample: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    marginBottom: 4,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  colorItem: {
    alignItems: 'center',
    width: 70,
  },
  colorSwatch: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginBottom: 8,
  },
  colorName: {
    fontWeight: '600',
    marginBottom: 2,
    textAlign: 'center',
  },
});
