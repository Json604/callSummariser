import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ThemeSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theme Settings</Text>
      <Text style={styles.subtitle}>Toggle between dark and light mode in upcoming versions.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0F23', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: 'white', marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'grey' },
});