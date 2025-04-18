import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Home/Header'
import HistoryTop from './HistoryTop'
import HistoryCard from './HistoryCard'

const Goals = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{padding:20}}>
                <HistoryTop />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
            {Array.from({ length: 12 }).map((_, i) => (
                        <HistoryCard key={i} />
                    ))}
            </ScrollView>
        </View>
    )
}

export default Goals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 20,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
    },
})
