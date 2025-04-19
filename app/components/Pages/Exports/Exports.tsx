import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../Home/Header';
import ExportStats from './ExportStats';
import ExportCard from './ExportCard';
import exportsData from '@/constants/ExportsData';

const Exports = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.outercont}>
                <ExportStats />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {exportsData.map((item) => (
                        <ExportCard
                            key={item.id}
                            label={item.label}
                            date={item.date}
                            title={item.title}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Exports;

const styles = StyleSheet.create({
    container: {
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
