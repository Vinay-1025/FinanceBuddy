import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Header from '../Home/Header';

const Profile = () => {
    const [isFingerprintEnabled, setIsFingerprintEnabled] = useState(false);
    const [gender, setGender] = useState('');

    const toggleFingerprint = () => setIsFingerprintEnabled(!isFingerprintEnabled);

    return (
        <View style={styles.wrapper}>
            <Header />

            <View style={styles.container}>
                {/* User Info */}
                <View style={styles.header}>
                    <View style={styles.avatar} />
                    <View>
                        <Text style={styles.username}>Vinay Sriram Gavara</Text>
                        <Text style={styles.subtext}>User gmail id used in google OAuth 2.0</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <View style={styles.proficons}>
                        <MaterialIcons name="refresh" size={18} color={'#D71616'} />
                        <MaterialIcons name="save" size={18} color={'#259040'} />
                    </View>
                </View>

                {/* Input Fields */}
                <TextInput style={styles.input} placeholder="User Name" placeholderTextColor="#aaa" />
                <TextInput style={styles.input} placeholder="Account" placeholderTextColor="#aaa" />
                
                <TextInput
                    style={styles.input}
                    placeholder="Date Of Birth"
                    placeholderTextColor="#aaa"
                />

                {/* Gender Picker */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={styles.picker}
                        dropdownIconColor="#000"
                    >
                        <Picker.Item label="Select Gender" value="" color="#aaa" style={{ fontSize: 14 }} />
                        <Picker.Item label="Male" value="male" style={{ fontSize: 14 }} />
                        <Picker.Item label="Female" value="female" style={{ fontSize: 14 }} />
                        <Picker.Item label="Other" value="other" style={{ fontSize: 14 }} />
                    </Picker>
                </View>

                {/* Fingerprint Auth */}
                <View style={styles.fingerprintRow}>
                    <Text style={styles.fingerprintText}>Set Finger Print Authentication.</Text>
                    <TouchableOpacity
                        onPress={toggleFingerprint}
                        style={[
                            styles.toggle,
                            {
                                backgroundColor: isFingerprintEnabled ? '#EE8E46' : '#fff',
                                borderColor: '#EE8E46',
                            },
                        ]}
                    >
                        <MaterialIcons
                            name={isFingerprintEnabled ? 'check-box' : 'check-box-outline-blank'}
                            size={20}
                            color={isFingerprintEnabled ? '#fff' : '#EE8E46'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginRight: 15,
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    subtext: {
        fontSize: 12,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 14,
        paddingVertical: 6,
        marginBottom: 15,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 15,
        height: 30,
        justifyContent: 'center',
    },
    picker: {
        width: '100%',
        color: '#000',
        fontSize: 14,
    },
    fingerprintRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    fingerprintText: {
        fontSize: 14,
        color: '#000',
        flex: 1,
    },
    toggle: {
        borderWidth: 1.5,
        borderRadius: 20,
        padding: 6,
    },
    proficons: {
        flexDirection: 'row',
        gap: 20,
    }
});
