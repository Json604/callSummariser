import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ProfileScreen() {
  const [analytics, setAnalytics] = useState(true);
  const [playback, setPlayback] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://your-cdn.com/sarah-brown.png' }} // Replace with Sarah's full image URL
          style={styles.avatar}
        />
        <Text style={styles.name}>Sarah Brown</Text>
        <Text style={styles.email}>sarahbrown@example.com</Text>
      </View>

      {/* Settings Card */}
      <View style={styles.card}>
        {/* Profile Info Row */}
        <TouchableOpacity style={styles.row}>
          <Icon name="user" size={20} color="#FFFFFF" />
          <Text style={styles.label}>Profile Information</Text>
        </TouchableOpacity>

        {/* Analytics Charts Row */}
        <TouchableOpacity style={styles.row}>
          <Icon name="bar-chart-2" size={20} color="#FFFFFF" />
          <Text style={styles.label}>Analytics Charts</Text>
        </TouchableOpacity>

        {/* Toggle 1 */}
        <View style={styles.row}>
          <Icon name="filter" size={20} color="#FFFFFF" />
          <Text style={styles.label}>Filter Enabled</Text>
          <Switch value={analytics} onValueChange={setAnalytics} />
        </View>

        {/* Toggle 2 */}
        <View style={styles.row}>
          <Icon name="play-circle" size={20} color="#FFFFFF" />
          <Text style={styles.label}>Playback Mode</Text>
          <Switch value={playback} onValueChange={setPlayback} />
        </View>

        {/* Notifications */}
        <TouchableOpacity style={styles.row}>
          <Icon name="bell" size={20} color="#FFFFFF" />
          <Text style={styles.label}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        color: '#B0B0B0',
        fontSize: 16,
    },
    card: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#333333',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        flexGrow: 1,
        marginLeft: 10,
    },
    logout: {
        backgroundColor: '#FF3B30',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})