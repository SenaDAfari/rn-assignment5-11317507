import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.usernameText}>Eric Atsu</Text>
        </View>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>
      <View style={styles.actions}>
        <ActionIcon source={require('../assets/send.png')} text="Sent" />
        <ActionIcon source={require('../assets/recieve.png')} text="Receive" />
        <ActionIcon source={require('../assets/loan.png')} text="Loan" />
        <ActionIcon source={require('../assets/topUp.png')} text="Topup" />
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
      </View>
      <TransactionItem icon={require('../assets/apple.png')} name="Apple Store" category="Entertainment" amount="- $5,99" />
      <TransactionItem icon={require('../assets/spotify.png')} name="Spotify" category="Music" amount="- $12,99" />
      <TransactionItem icon={require('../assets/moneyTransfer.png')} name="Money Transfer" category="Transaction" amount="+ $300" />
      <TransactionItem icon={require('../assets/grocery.png')} name="Grocery" category="Shopping" amount="- $88" />
    </ScrollView>
  );
}

function ActionIcon({ source, text }) {
  return (
    <View style={styles.action}>
      <Image source={source} style={styles.actionIcon} />
      <Text>{text}</Text>
    </View>
  );
}

function TransactionItem({ icon, name, category, amount }) {
  return (
    <View style={styles.transactionItem}>
      <Image source={icon} style={styles.transactionIcon} />
      <View style={styles.transactionText}>
        <Text>{name}</Text>
        <Text style={styles.transactionCategory}>{category}</Text>
      </View>
      <Text>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 14,
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  action: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionText: {
    flex: 1,
  },
  transactionCategory: {
    color: 'gray',
  },
});