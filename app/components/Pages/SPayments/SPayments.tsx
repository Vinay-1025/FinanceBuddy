import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import SPaymentsTop from './SPaymentsTop'
import Header from '../Home/Header'
import SPaymentsForm from './SPaymentsForm'

const SPaymrnts = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{padding:20}}>
                <SPaymentsTop />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <SPaymentsForm />
            </ScrollView>
        </View>
    )
}

export default SPaymrnts

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
