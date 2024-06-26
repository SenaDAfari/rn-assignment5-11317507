import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen({ toggleTheme }) {
  return (
    <View style={styles.container}>
      <Text style={styles.settingText}>Language</Text>
      <Text style={styles.settingText}>My Profile</Text>
      <Text style={styles.settingText}>Contact Us</Text>
      <Text style={styles.settingText}>Change Password</Text>
      <Text style={styles.settingText}>Privacy Policy</Text>
      <View style={styles.themeSwitchContainer}>
        <Text style={styles.settingText}>Theme</Text>
        <Switch onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  settingText: {
    fontSize: 18,
    marginVertical: 10,
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});