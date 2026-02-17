import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        tabBarStyle: { backgroundColor: Colors.surface },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Événements',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Composants',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />,
        }}
      />
    </Tabs>
  );
}
