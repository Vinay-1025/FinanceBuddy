import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { MaterialIcons } from '@expo/vector-icons';

const UpiStats = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleHandler = () => setIsToggleOn(prev => !prev);

    return (
        <View>
            <View style={styles.outercont}>
                <View style={styles.rowcont}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 600 }}>UPI Transactions</Text>
                        <Text>Allow App to read your UPI Transactions</Text>
                    </View>
                    <TouchableOpacity
                        onPress={toggleHandler}
                        style={[
                            styles.toggleBtn,
                            { backgroundColor: isToggleOn ? '#EE8E46' : '#fff', borderColor: '#EE8E46' }
                        ]}
                    >
                        <Text style={{ color: isToggleOn ? '#fff' : '#EE8E46', fontWeight: 'bold' }}>
                            {isToggleOn ? 'ON' : 'OFF'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>UPI IN :    </Text>
                    <ProgressBar
                        progress={0.5}
                        width={null}
                        height={5}
                        color="#259040"
                        borderRadius={8}
                        unfilledColor="#FFD5D5"
                        borderWidth={1}
                        borderColor="#000"
                        style={styles.progress}
                    />
                    <Text style={{ color: '#259040', fontWeight: 'bold', fontSize: 16 }}>+ 1,30,000</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>UPI OUT :</Text>
                    <ProgressBar
                        progress={0.9}
                        width={null}
                        height={5}
                        color="#D71616"
                        borderRadius={8}
                        unfilledColor="#FFD5D5"
                        borderWidth={1}
                        borderColor="#000"
                        style={styles.progress}
                    />
                    <Text style={{ color: '#D71616', fontWeight: 'bold', fontSize: 16 }}>- 3,47,903</Text>
                </View>
            </View>

            <View style={styles.refcont}>
                <View>
                    <Text style={styles.reftitle}>History</Text>
                    <Text style={{ color: '#4E8BC3' }}>
                        <MaterialIcons name='sync-alt' color={'#4E8BC3'} />  12 Transactions
                    </Text>
                </View>
                <View style={styles.refdetails}>
                    <TouchableOpacity>
                        <MaterialIcons name="refresh" size={20} color={'#D71616'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default UpiStats;

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        paddingBottom: 15,
        marginBottom: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginRight: 12,
    },
    progress: {
        flex: 1,
        marginRight: 12,
    },
    refdetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    refcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    reftitle: {
        fontSize: 20,
        fontWeight: 600
    },
    clearbtn: {
        backgroundColor: '#539DE2',
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginRight: 10,
        borderRadius: 5,
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    toggleBtn: {
        borderWidth: 1.5,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
});
