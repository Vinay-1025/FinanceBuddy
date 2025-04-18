import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Home/Header'
import RecordsStat from './RecordsStat'

const Records = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <RecordsStat />
            </View>
        </ScrollView>
    )
}

export default Records

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
})
