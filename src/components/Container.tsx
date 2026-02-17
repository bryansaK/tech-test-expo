import { View, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ContainerProps = ViewProps & {
  /** Apply safe area insets. Use ['top'] for tab screens, ['top', 'bottom'] for full screen. */
  safeAreaEdges?: ('top' | 'bottom' | 'left' | 'right')[];
};

export function Container({ style, safeAreaEdges, ...props }: ContainerProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const baseStyle = [{ backgroundColor }, style];

  if (safeAreaEdges && safeAreaEdges.length > 0) {
    return <SafeAreaView style={baseStyle} edges={safeAreaEdges} {...props} />;
  }

  return <View style={baseStyle} {...props} />;
}
