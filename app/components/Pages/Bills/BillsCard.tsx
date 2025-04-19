import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const BillsCard = ({ title, note, date }) => {
    return (
        <View style={styles.outercont}>
            <View style={styles.rowcont}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
                <TouchableOpacity style={styles.exportbtn}>
                    <Text style={{ color: '#fff' }}>Export </Text>
                    <MaterialIcons name="save" color={'#fff'} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowcont}>
                <Text>{note}</Text>
                <Text>Date : {date}</Text>
            </View>
        </View>
    );
};

export default BillsCard;

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        gap: 6,
        paddingBottom: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        marginBottom: 20,
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    exportbtn: {
        flexDirection: 'row',
        backgroundColor: '#A760E9',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});
