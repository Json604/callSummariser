// src/screens/settings/Settings.tsx
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatCard from '../../components/ui/StatCard';
import DynCard from '../../components/ui/dynCard';
import { ThemeContext } from '../../context/useTheme';

const { text, subtext } = useContext(ThemeContext); // Ensure useTheme is correctly imported and exported
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      {/* Profile Header */}
      <View style={styles.profileRow}>
        <View style={styles.pfpWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.pfp}
          />
        </View>

        <DynCard style={[styles.card, { backgroundColor: '#131740' }]}>
          <Text style={[styles.cardText, { color: text }]}>John Doe</Text>
          <Text style={[styles.cardSubText, { color: subtext }]}>+91 123456789</Text>
          <Icon name="square-edit-outline" size={24} color={subtext} style={styles.matIcon} />
        </DynCard>
      </View>

      {/* Options */}
      <View style={styles.section}>
        <Text style={[styles.title, { color: text }]}>About the App</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
          <StatCard style={styles.itemsCard}>
            <Text style={[styles.itemText, { color: text }]}>About the App</Text>
            <Icon name="chevron-right" size={24} color={text} />
          </StatCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ThemeSettings')}>
          <StatCard style={styles.itemsCard}>
            <Text style={[styles.itemText, { color: text }]}>Toggle Theme</Text>
            <Icon name="chevron-right" size={24} color={text} />
          </StatCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Permissions')}>
          <StatCard style={styles.itemsCard}>
            <Text style={[styles.itemText, { color: text }]}>Permissions</Text>
            <Icon name="chevron-right" size={24} color={text} />
          </StatCard>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0D0F23', padding: 20 },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  pfpWrapper: { marginRight: 16 },
  pfp: { width: 80, height: 80, borderRadius: 40 },
  card: { padding: 16, borderRadius: 12, flex: 1 },
  cardText: { fontSize: 18, fontWeight: '700' },
  cardSubText: { fontSize: 14 },
  matIcon: { position: 'absolute', top: 10, right: 10 },
  section: { marginTop: 30 },
  title: { fontSize: 18, marginBottom: 12 },
  itemsCard: {
    backgroundColor: '#131740',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: { fontSize: 16 },
});