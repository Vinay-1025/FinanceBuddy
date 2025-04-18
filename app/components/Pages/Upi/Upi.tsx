import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import UpiStats from './UpiStats';
import UpiCard from './UpiCard';


const Upi = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.outercont}>
                <UpiStats />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <UpiCard key={i} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Upi;

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
