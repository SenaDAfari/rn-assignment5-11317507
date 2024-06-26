import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function StatisticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Statistics</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Statistic 1: 50%</Text>
        <Text style={styles.statsText}>Statistic 2: 75%</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  statsContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 18,
    marginVertical: 10,
  },
});