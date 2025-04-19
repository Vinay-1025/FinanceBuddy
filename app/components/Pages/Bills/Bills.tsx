import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import BillsStat from './BillsStat';
import BillsCard from './BillsCard';
import billsData from '@/constants/BillsData';

const Bills = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.outercont}>
                <BillsStat />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {billsData.map((bill) => (
                        <BillsCard
                            key={bill.id}
                            title={bill.title}
                            note={bill.note}
                            date={bill.date}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Bills;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    outercont: {
        flex: 1,
        padding: 20,
    },
    scrollContent: {
        paddingTop: 5,
        paddingBottom: 20,
    },
});
