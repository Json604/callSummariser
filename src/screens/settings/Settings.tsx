import { useContext } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { ThemeContext } from "../../context/useTheme";
import DynCard from "../../components/ui/dynCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DeviceInfo from "react-native-device-info";
import StatCard from "../../components/ui/StatCard";

export default function Profile() {
    const { background, text, subtext } = useContext(ThemeContext);
    const version: string = DeviceInfo.getVersion();

    return (
        <ScrollView contentContainerStyle={[styles.scrollContent, { backgroundColor: background }]}>
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

               
                <View style={styles.section}>
                    <Text style={[styles.title, { color: text }]}>About the App</Text>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Toggle Theme</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Permissions</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                </View>

                {/* Other Section */}
                <View style={styles.section}>
                    <Text style={[styles.title, { color: text }]}>Others</Text>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Rate us</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Terms & Conditions</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Support</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                    <StatCard style={styles.itemsCard}>
                        <Text style={[styles.itemText, { color: text }]}>Logout</Text>
                        <Icon name="chevron-right" size={24} color={text} />
                    </StatCard>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={{ color: subtext }}>App version {version}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    page: {
        flex: 1,
        padding: 20,
    },
   profileRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 50,
  marginBottom: 35,
},
pfpWrapper: {
  width: 110,
  height: 110,
  marginRight: 16, // Positive margin instead
  borderRadius: 55,
  overflow: 'hidden',
  backgroundColor: '#1E1E1E',
  justifyContent: 'center',
  alignItems: 'center',
},
    pfp: {
        width: 120,
        height: 120,
        borderRadius: 60,
        resizeMode: 'cover',
    },
    card: {
        flex: 1,
        padding: 20,
        borderRadius: 16,
        elevation: 5,
        marginLeft: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 15,
    },
    cardText: {
        fontSize: 20,
        fontWeight: '600',
    },
    cardSubText: {
        fontSize: 15,
        marginTop: 4,
    },
    matIcon: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
    section: {
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
    },
    itemsCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginBottom: 12,
        backgroundColor: '#1C1C2E',
        borderRadius: 12,
    },
    itemText: {
        fontSize: 16,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
});