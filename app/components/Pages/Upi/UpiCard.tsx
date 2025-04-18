import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const UpiCard = () => {
    return (
        <View style={styles.outercont}>
            <View style={styles.rowcont}>
                <Text style={{fontSize: 16, fontWeight:600}}>Name</Text>
                <Text style={{color: '#259040'}}>InFlow</Text>
            </View>
            <Text>Transaction ID : RPUC85746389245</Text>
            <View style={styles.rowcont}>
                <Text>Amount : ₹ 2,000</Text>
                <Text>27-12-2024</Text>
            </View>
        </View>
    )
}

export default UpiCard

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
    }
})