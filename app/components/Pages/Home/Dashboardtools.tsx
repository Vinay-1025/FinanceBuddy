import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Dashboardtools = () => {
    return (
        <View style={styles.toolsdash}>
            <TouchableOpacity style={styles.btnupload}><Text style={styles.btnname}>Upload</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnhistory}><Text style={styles.btnname}>History</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mic}><Text><MaterialIcons name="mic" size={20} color={'#A02121'} /></Text></TouchableOpacity>
            <TouchableOpacity style={styles.re}><MaterialIcons name='autorenew' size={25} color={'#E28E46'} /></TouchableOpacity>
        </View>
    )
}

export default Dashboardtools

const styles = StyleSheet.create({
    toolsdash: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingBottom: 20,
        alignItems: 'center'
    },
    btnupload: {
        backgroundColor: '#EE8E46',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 100,
        boxShadow: '0 2 4 black'
    },
    btnhistory: {
        backgroundColor: '#4E8BC3',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 100,
        boxShadow: '0 2 4 black'
    },
    mic: {
        backgroundColor: '#e7e7e7',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 9,
        borderRadius: 20,
        boxShadow: '0 2 4 black'
    },
    re: {
        textAlign: 'center',
        paddingRight: 4,
    },
    btnname: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 600,
    }
})