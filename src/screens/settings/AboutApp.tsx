import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Echofy</Text>
      <Text style={styles.description}>
        Echofy is your AI-powered call assistant, designed to transcribe, summarize, and organize your call memory for seamless recall and follow-up.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0F23', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: 'white', marginBottom: 10 },
  description: { fontSize: 16, color: 'grey', lineHeight: 24 },
});