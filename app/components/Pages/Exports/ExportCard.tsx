import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const ExportCard = () => {
    return (
        <View style={styles.outercont}>
            <View style={styles.rowcont}>
                <View style={styles.labelbtn} >
                    <Text style={{color: '#fff', fontWeight: 800}}>IRCTC</Text>
                </View>
                <Text>Last Exported On 28-12-2024</Text>
            </View>
            <View style={styles.rowcont}>
                <Text style={{textTransform: 'uppercase', fontWeight: 600}}>Budget Plan A (Tour)</Text>
                <TouchableOpacity style={styles.exportbtn}>
                    <Text style={{color: '#fff'}}>Export </Text>
                    <MaterialIcons name="save" color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExportCard

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        marginBottom: 8
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labelbtn: {
        backgroundColor: '#EE8E46',
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 6
    },
    exportbtn: {
        flexDirection: 'row',
        backgroundColor: '#A760E9',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4
    }
})