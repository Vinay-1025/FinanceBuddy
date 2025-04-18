import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const ExportStats = () => {
    return (
        <View style={styles.outercont}>
            <View style={styles.rowcont}>
                <Text style={{fontSize: 20, fontWeight: 600}}>Exports Data</Text>
                <TouchableOpacity>
                    <MaterialIcons name='tune' size={16} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowcont}>
                <View style={styles.rowcont}>
                    <MaterialIcons name='summarize' color={'#D71616'} />
                    <Text style={{color: '#D71616'}}> 12 Files</Text>
                </View>
                <TouchableOpacity style={styles.clearbtn}>
                    <Text style={{color: '#fff'}}>Clear Exported Data</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExportStats

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        gap: 6,
        paddingBottom: 15
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clearbtn: {
        backgroundColor: '#539DE2',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    }
})