import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CallDetails() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.contactName}>John Smith</Text>
        <Text style={styles.callMeta}>Incoming · 3m 20s · 2 mins ago</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* AI Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 AI Summary</Text>
        <Text style={styles.sectionText}>
          Discussed project update, deliverables, and client feedback on current progress.
        </Text>
      </View>

      {/* Transcript */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Transcript</Text>
        <Text style={styles.transcriptText}>
          John: Hey, just wanted to give you a quick update on the project...
          {'\n\n'}You: Sure, go ahead...
          {'\n\n'}John: So, the client said they're happy with the progress...
        </Text>
      </View>

      {/* Tags or Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Tags</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>#Project</Text>
          <Text style={styles.tag}>#ClientFeedback</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    marginBottom: 12,
  },
  contactName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  callMeta: {
    color: 'grey',
    fontSize: 14,
    marginTop: 4,
  },
  divider: {
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#A276F8',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  sectionText: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },
  transcriptText: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    color: '#00ffae',
    fontSize: 12,
  },
});