import { Text as RNText, type TextProps, type TextStyle } from 'react-native';

import { Colors } from '@/constants/theme';

export type TextSize = 'XL' | 'L' | 'M' | 'S' | 'XS';

const sizeStyles: Record<TextSize, TextStyle> = {
  XL: { fontSize: 32, lineHeight: 40, fontWeight: '700' },
  L: { fontSize: 24, lineHeight: 32, fontWeight: '600' },
  M: { fontSize: 16, lineHeight: 24 },
  S: { fontSize: 14, lineHeight: 20 },
  XS: { fontSize: 12, lineHeight: 16 },
};

export type TextProps_ = TextProps & {
  size?: TextSize;
  color?: string;
  muted?: boolean;
};

export function Text({
  size = 'M',
  color,
  muted,
  style,
  ...rest
}: TextProps_) {
  const textColor = color ?? (muted ? Colors.foregroundMuted : Colors.foreground);
  const sizeStyle = sizeStyles[size];

  const baseStyle: TextStyle = {
    color: textColor,
    fontSize: sizeStyle.fontSize,
    lineHeight: sizeStyle.lineHeight,
    ...(sizeStyle.fontWeight && { fontWeight: sizeStyle.fontWeight }),
  };

  return <RNText style={[baseStyle, style]} {...rest} />;
}
