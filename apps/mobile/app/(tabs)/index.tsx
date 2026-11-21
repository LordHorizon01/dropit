
import { StyleSheet, Text, View, Pressable, ScrollView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>Drop<Text style={styles.logoAccent}>It.</Text></Text>
            <Text style={styles.tagline}>Share without boundaries.</Text>
          </View>

          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>G</Text>
          </Pressable>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.greeting}>Hello there 👋</Text>
          <Text style={styles.heading}>What would you like to do?</Text>
          <Text style={styles.description}>
            Move your files between devices, effortlessly.
          </Text>
        </View>

        {/* Main Actions */}
        <View style={styles.actions}>
          <Pressable style={styles.sendCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>↑</Text>
            </View>
            <Text style={styles.actionTitle}>Send Files</Text>
            <Text style={styles.actionDescription}>
              Share files with nearby devices
            </Text>
            <Text style={styles.actionArrow}>→</Text>
          </Pressable>

          <Pressable style={styles.receiveCard}>
            <View style={styles.receiveIcon}>
              <Text style={styles.iconText}>↓</Text>
            </View>
            <Text style={styles.actionTitle}>Receive Files</Text>
            <Text style={styles.actionDescription}>
              Receive files from another device
            </Text>
            <Text style={styles.actionArrow}>→</Text>
          </Pressable>
        </View>

        {/* Nearby Devices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby Devices</Text>
            <Text style={styles.sectionLink}>Refresh</Text>
          </View>

          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>⌁</Text>
            <Text style={styles.emptyTitle}>No devices found yet</Text>
            <Text style={styles.emptyDescription}>
              Devices available for sharing will appear here.
            </Text>
          </View>
        </View>

        {/* Recent Transfers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transfers</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>

          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Nothing here yet</Text>
            <Text style={styles.emptyDescription}>
              Your completed transfers will appear here.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>DROPIT · SHARE SIMPLY</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -1,
  },
  logoAccent: {
    color: '#64D8CB',
  },
  tagline: {
    color: '#858992',
    fontSize: 12,
    marginTop: 3,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#24272D',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#383C44',
  },
  profileText: {
    color: '#64D8CB',
    fontSize: 17,
    fontWeight: '700',
  },
  welcome: {
    marginTop: 48,
    marginBottom: 25,
  },
  greeting: {
    color: '#64D8CB',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: -0.7,
  },
  description: {
    color: '#969BA5',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 21,
  },
  actions: {
    gap: 14,
  },
  sendCard: {
    backgroundColor: '#64D8CB',
    borderRadius: 20,
    padding: 21,
    minHeight: 155,
  },
  receiveCard: {
    backgroundColor: '#202329',
    borderRadius: 20,
    padding: 21,
    minHeight: 155,
    borderWidth: 1,
    borderColor: '#353942',
  },
  actionIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  receiveIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#30363D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  iconText: {
    color: '#101114',
    fontSize: 25,
    fontWeight: '700',
  },
  actionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },
  actionDescription: {
    color: '#B0B5BE',
    fontSize: 12,
    marginTop: 6,
  },
  actionArrow: {
    position: 'absolute',
    right: 22,
    top: 24,
    color: '#FFFFFF',
    fontSize: 25,
  },
  section: {
    marginTop: 34,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#64D8CB',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyCard: {
    backgroundColor: '#1A1D22',
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C3038',
  },
  emptyIcon: {
    color: '#64D8CB',
    fontSize: 32,
    marginBottom: 8,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyDescription: {
    color: '#858B96',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 19,
  },
  footer: {
    color: '#555B65',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 38,
    letterSpacing: 2,
  },
});
