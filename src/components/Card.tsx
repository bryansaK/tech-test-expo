import { View, type ViewProps } from 'react-native';

import { Colors, radius } from '@/constants/theme';

export type CardProps = ViewProps & {
  variant?: 'elevated' | 'outlined';
};

export function Card({ style, variant = 'elevated', ...props }: CardProps) {
  return (
    <View
      style={[
        {
          backgroundColor: variant === 'outlined' ? 'transparent' : Colors.surface,
          borderWidth: variant === 'outlined' ? 1 : 0,
          borderColor: Colors.foregroundMuted + '30',
          borderRadius: radius.lg,
          ...(variant === 'elevated' && {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
          }),
        },
        style,
      ]}
      {...props}
    />
  );
}
