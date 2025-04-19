import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import AppList from './AppList';
import RefundStats from './RefundStats';
import { refundData } from '@/constants/RefundData';
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
          {refundData.map((item, index) => (
                    <Refundcard
                        key={index}
                        company={item.company}
                        date={item.date}
                        pnr={item.pnr}
                        route={item.route}
                        amount={item.amount}
                    />
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
