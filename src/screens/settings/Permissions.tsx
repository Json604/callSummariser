import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Permissions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissions</Text>
      <Text style={styles.description}>
        This app requires microphone, call log, and storage access to record and transcribe your calls.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0F23', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: 'white', marginBottom: 10 },
  description: { fontSize: 16, color: 'grey', lineHeight: 24 },
});