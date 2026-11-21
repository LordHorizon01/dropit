
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet, type ColorValue } from 'react-native';

function TabIcon({
  symbol,
  color,
  label,
}: {
  symbol: string;
  color: ColorValue;
  label: string;
}) {
  return (
    <View style={styles.iconContainer}>
      <Text style={[styles.icon, { color }]}>{symbol}</Text>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#64D8CB' ,
        tabBarInactiveTintColor: '#777D88',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="⌂" color={color} label="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="⇄" color={color} label="Activity" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#15171C',
    borderTopColor: '#292D35',
    borderTopWidth: 1,
    height: 72,
    paddingTop: 9,
    paddingBottom: 8,
    elevation: 0,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: 65,
  },
  icon: {
    fontSize: 23,
    fontWeight: '600',
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
  },
});
