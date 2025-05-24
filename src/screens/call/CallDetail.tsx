import React from 'react';

type DayKey = 'Today' | 'Yesterday' | 'Monday';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Feather';

const groupedCalls: Record<DayKey, {
  id: string;
  name: string;
  type: string;
  duration: string;
  summary: string;
}[]> = {
  Today: [
    {
      id: '1',
      name: 'John Smith',
      type: 'Incoming',
      duration: '3m 20s',
      summary: 'Discussed onboarding strategy and deadlines.',
    },
  ],
  Yesterday: [
    {
      id: '2',
      name: 'Alice Brown',
      type: 'Missed',
      duration: '',
      summary: 'Missed call to confirm the appointment.',
    },
  ],
  Monday: [
    {
      id: '3',
      name: 'Michael Johnson',
      type: 'Outgoing',
      duration: '5m 15s',
      summary: 'Feedback on the design proposal.',
    },
  ],
};

export default function CallLogScreen() {
  return (
    <View style={styles.container}>
      {/* Background Animation */}

      {/* Foreground Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Call Logs</Text>

        {(Object.keys(groupedCalls) as DayKey[]).map((day) => (
          <View key={day} style={styles.dayGroup}>
            <Text style={styles.dayTitle}>{day}</Text>
            {groupedCalls[day].map((call) => (
              <View key={call.id} style={styles.callCard}>
                <View style={styles.row}>
                  <Icon name="phone" size={18} color="#00ffae" />
                  <Text style={styles.callName}>{call.name}</Text>
                </View>
                <Text style={styles.callType}>
                  {call.type} {call.duration ? '· ' + call.duration : ''}
                </Text>
                <Text style={styles.callSummary}>{call.summary}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    width,
    height,
    zIndex: -1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  dayGroup: {
    marginBottom: 24,
  },
  dayTitle: {
    color: '#A276F8',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  callCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  callName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  callType: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
  },
  callSummary: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 6,
  },
});