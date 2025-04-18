import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HistoryCard = () => {
    return (
        <View style={styles.outercont}>
            <View style={styles.cardtitle}>
                <Text style={{fontSize: 18, fontWeight:600}}>Goal Name</Text>
                <Text style={styles.label}>Label</Text>
            </View>
            <Text>This is the note of the Goal for the reference.</Text>
            <View style={styles.cardfoot}>
                <Text>On 21-12-2024</Text>
                <Text>Target Date : 01-01-2025</Text>
                <TouchableOpacity>
                    <Text style={{color:'#539DE2'}}>View Deatails</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        gap: 6,
        paddingBottom: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        marginBottom: 20,
    },
    cardtitle: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    label: {
        color: '#EE8E46',
        fontWeight: 600
    },
    cardfoot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})