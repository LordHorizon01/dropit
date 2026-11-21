import { StyleSheet, Text, View } from 'react-native';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>DROPIT</Text>
      <Text style={styles.title}>Activity</Text>
      <View style={styles.emptyCard}>
        <Text style={styles.emptyTitle}>No transfers yet</Text>
        <Text style={styles.description}>
          Completed and incoming transfers will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
    paddingHorizontal: 22,
    paddingTop: 64,
  },
  eyebrow: {
    color: '#64D8CB',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 24,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: '#1A1D22',
    borderColor: '#2C3038',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: '#858B96',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    textAlign: 'center',
  },
});
