import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import BillsStat from './BillsStat';
import BillsCard from './BillsCard';

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
                    {Array.from({ length: 15 }).map((_, i) => (
                        <BillsCard key={i} />
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
