import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { MaterialIcons } from '@expo/vector-icons';

const RefundStats = () => {
    return (
        <View>
            <View style={styles.outercont}>
                <View style={styles.container}>
                    <Text style={styles.title}>Refunds :</Text>
                    <ProgressBar
                        progress={0.8}
                        width={null}
                        height={5}
                        color="#539DE2"
                        borderRadius={8}
                        unfilledColor="#FFD5D5"
                        borderWidth={1}
                        borderColor="#000"
                        style={styles.progress}
                    />
                    <Text style={{ color: '#539DE2', fontWeight: 'bold', fontSize: 16 }}>500</Text>
                </View>
                <View style={styles.refdetails}>
                    <Text>Cancellations : <Text style={{ color: '#D71616' }}>200</Text></Text>
                    <Text>Refund Pending Amount : <Text style={{ color: '#D71616' }}>2,00,000</Text></Text>
                </View>
            </View>
            <View style={styles.refcont}>
                <Text style={styles.reftitle}>IRCTC Refund Details</Text>
                <View style={styles.refdetails}>
                    <TouchableOpacity style={styles.clearbtn}><Text style={{color: '#fff'}}>Clear Refunded Data</Text></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name="refresh" size={20} /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RefundStats;

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1
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
    }
});
