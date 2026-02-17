import { StyleSheet, View } from 'react-native';

import { Colors, radius } from '@/constants/theme';

import { Text } from './Text';

export type BadgeColor = 'blue' | 'green' | 'neutral';

export type BadgeProps = {
  children: string;
  color?: BadgeColor;
};

const colorMap: Record<BadgeColor, { bg: string; text: string }> = {
  blue: { bg: Colors.accentBlue + '25', text: Colors.accentBlue },
  green: { bg: Colors.accentGreen + '25', text: '#1B5E20' },
  neutral: { bg: Colors.foregroundMuted + '25', text: Colors.foregroundMuted },
};

export function Badge({ children, color = 'blue' }: BadgeProps) {
  const { bg, text } = colorMap[color];

  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text size="XS" style={{ color: text, fontWeight: '600' }}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
    alignSelf: 'flex-start',
  },
});
