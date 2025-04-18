import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const SPaymentsForm = () => {
    const [category, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [frequency, setFrequency] = useState('');
    const [date, setDate] = useState('');
    const [notification, setNotification] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.rowcont}>
                <Text style={styles.title}>Add Scheduled Payment - Income</Text>
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
                placeholder="Name For Scheduled Income" 
                placeholderTextColor="#aaa" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Payer Name" 
                placeholderTextColor="#aaa" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Amount" 
                placeholderTextColor="#aaa" 
                keyboardType="numeric" 
            />

            <Picker 
                style={styles.picker} 
                selectedValue={paymentType} 
                onValueChange={setPaymentType}>
                <Picker.Item label="Select Payment Type" value="" color="#aaa" />
                <Picker.Item label="UPI" value="upi" />
                <Picker.Item label="Card" value="card" />
                <Picker.Item label="Cash" value="cash" />
            </Picker>

            <Picker 
                style={styles.picker} 
                selectedValue={category} 
                onValueChange={setCategory}>
                <Picker.Item label="Select Category" value="" color="#aaa" />
                <Picker.Item label="Salary" value="salary" />
                <Picker.Item label="Business" value="business" />
            </Picker>

            <Picker 
                style={styles.picker} 
                selectedValue={frequency} 
                onValueChange={setFrequency}>
                <Picker.Item label="Select Frequency" value="" color="#aaa" />
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
            </Picker>

            <TextInput 
                style={styles.input} 
                placeholder="Date" 
                placeholderTextColor="#aaa" 
                value={date}
                onChangeText={setDate} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Notification" 
                placeholderTextColor="#aaa" 
                value={notification}
                onChangeText={setNotification} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Note" 
                placeholderTextColor="#aaa" 
            />
        </View>
    );
};

export default SPaymentsForm;

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
