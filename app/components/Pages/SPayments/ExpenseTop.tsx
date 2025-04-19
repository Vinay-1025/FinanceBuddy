import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRouter } from 'expo-router';

const ExpenseTop = () => {

    const router = useRouter();

    return (
        <View style={styles.toolsdash}>
            <TouchableOpacity style={styles.btnupload} onPress={() => router.push('/components/Pages/SPayments/SPayments')}><Text style={styles.btnname}>Income</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnhistory}><Text style={styles.btnname}>Expense</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mic}><Text><MaterialIcons name="mic" size={20} color={'#A02121'} /></Text></TouchableOpacity>
        </View>
    )
}

export default ExpenseTop

const styles = StyleSheet.create({
    toolsdash: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingBottom: 0,
        alignItems: 'center'
    },
    btnupload: {
        backgroundColor: '#4E8BC3',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 120,
        boxShadow: '0 2 4 black'
    },
    btnhistory: {
        backgroundColor: '#EE8E46',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 120,
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