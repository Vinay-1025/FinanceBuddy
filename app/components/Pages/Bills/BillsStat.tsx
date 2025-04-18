import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const BillsStat = () => {
    return (
        <View style={styles.columncont}>
            <View style={styles.rowcont}>
                <Text style={{fontSize: 20, fontWeight: 600}}>Bills Overview</Text>
                <TouchableOpacity ><MaterialIcons name="tune" size={18} /></TouchableOpacity>
            </View>
            <View style={styles.rowcont}>
                <View style={styles.rowcont}>
                    <MaterialIcons name="summarize" style={{color: '#539DE2'}}/>
                    <Text style={{color: '#539DE2'}}>15 Bills</Text>
                </View>
                <View style={styles.rowconticon}>
                    <TouchableOpacity><MaterialIcons name='refresh' size={25} color={'#D71616'} /></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name="upload" size={25} color={'#259040'} /></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name='document-scanner' size={20} color={'#4E8BC3'} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BillsStat

const styles = StyleSheet.create({
    columncont: {
        flexDirection: 'column',
        gap:10,
        marginBottom: 15
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8
    },
    rowconticon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 25
    }
})