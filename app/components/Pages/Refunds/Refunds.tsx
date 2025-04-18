import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import AppList from './AppList';
import RefundStats from './RefundStats';
import Refundcard from '../Home/Refundcard';

const Refunds = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AppList />
      <View style={styles.content}>
        <RefundStats />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <Refundcard key={i} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Refunds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    paddingTop: 5,
    paddingBottom: 0,
  },
});
