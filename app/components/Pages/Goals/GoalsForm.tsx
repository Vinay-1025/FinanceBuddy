import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const GoalsForm = () => {
    const [category, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [frequency, setFrequency] = useState('');
    const [date, setDate] = useState('');
    const [notification, setNotification] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.rowcont}>
                <Text style={styles.title}>Set Goal</Text>
                <View style={styles.proficons}>
                    <TouchableOpacity>
                        <MaterialIcons name="refresh" size={24} color={'#D71616'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="save" size={24} color={'#259040'} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <TextInput 
                style={styles.input} 
                placeholder="Name For The Goal" 
                placeholderTextColor="#aaa" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Target Amount" 
                placeholderTextColor="#aaa" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Any Savings" 
                placeholderTextColor="#aaa" 
                keyboardType="numeric" 
            />

            <Picker 
                style={styles.picker} 
                selectedValue={'Expected On'} 
                onValueChange={setPaymentType}>
                <Picker.Item label="Expected On" value="" color="#aaa" />
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
            </Picker>

            <TextInput 
                style={styles.input} 
                placeholder="Label" 
                placeholderTextColor="#aaa" 
                value={date}
                onChangeText={setDate} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Note" 
                placeholderTextColor="#aaa" 
            />
        </View>
    );
};

export default GoalsForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 14,
        paddingVertical: 6,
        marginBottom: 12,
    },
    picker: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 14,
        marginBottom: 12,
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    proficons: {
        flexDirection: 'row',
        gap: 20,
    }
});
