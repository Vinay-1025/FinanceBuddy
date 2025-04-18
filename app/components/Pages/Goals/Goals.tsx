import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Home/Header'
import GoalsTop from './GoalsTop'
import GoalsForm from './GoalsForm'

const Goals = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{padding:20}}>
                <GoalsTop />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <GoalsForm />
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
        padding: 0,
        paddingBottom: 40,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
    },
})
