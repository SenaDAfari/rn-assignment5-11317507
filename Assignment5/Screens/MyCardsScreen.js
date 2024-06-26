import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function MyCardsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Cards</Text>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
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
  cardContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
  },
});